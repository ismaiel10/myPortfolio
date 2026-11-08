'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Compass, Sliders, Wind, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const PhysicsSimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [colorMap, setColorMap] = useState<'plasma' | 'viridis' | 'thermal' | 'cyan'>('plasma');
  const [showVectors, setShowVectors] = useState(false);
  const [flowSpeed, setFlowSpeed] = useState(1.4);
  const [vortexStrength, setVortexStrength] = useState(1.0);

  const isRunningRef = useRef(true);
  const colorMapRef = useRef<'plasma' | 'viridis' | 'thermal' | 'cyan'>('plasma');
  const showVectorsRef = useRef(false);
  const flowSpeedRef = useRef(1.4);
  const vortexStrengthRef = useRef(1.0);
  const mousePosRef = useRef({ x: -1000, y: -1000, isHovering: false });

  useEffect(() => {
    isRunningRef.current = isRunning;
    colorMapRef.current = colorMap;
    showVectorsRef.current = showVectors;
    flowSpeedRef.current = flowSpeed;
    vortexStrengthRef.current = vortexStrength;
  }, [isRunning, colorMap, showVectors, flowSpeed, vortexStrength]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = canvas.width;
    const height = canvas.height;

    // Particle pool
    const particleCount = 650;
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      speed: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];
    const resetParticle = (p: Particle) => {
      p.x = Math.random() * -50;
      p.y = Math.random() * height;
      p.vx = (1.5 + Math.random() * 2.0) * flowSpeedRef.current;
      p.vy = (Math.random() - 0.5) * 0.4;
      p.speed = 1.0;
      p.life = 0;
      p.maxLife = 150 + Math.random() * 200;
    };

    for (let i = 0; i < particleCount; i++) {
      const p: Particle = {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 2,
        vy: 0,
        speed: 1.0,
        life: Math.random() * 200,
        maxLife: 250,
      };
      particles.push(p);
    }

    // Color Map function
    const getColor = (speedNorm: number) => {
      const s = Math.min(1.0, Math.max(0.0, speedNorm));
      const map = colorMapRef.current;

      if (map === 'plasma') {
        // Purple -> Orange -> Yellow
        const r = Math.round(20 + s * 235);
        const g = Math.round(10 + Math.sin(s * Math.PI) * 160 + s * 70);
        const b = Math.round(150 * (1 - s) + s * 30);
        return `rgb(${r}, ${g}, ${b})`;
      } else if (map === 'viridis') {
        // Deep Purple -> Teal -> Emerald -> Yellow
        const r = Math.round(40 + s * 210);
        const g = Math.round(80 + s * 175);
        const b = Math.round(140 * (1 - s) + s * 30);
        return `rgb(${r}, ${g}, ${b})`;
      } else if (map === 'thermal') {
        // Blackbody: Red -> Amber -> White
        const r = Math.round(120 + s * 135);
        const g = Math.round(s > 0.4 ? (s - 0.4) * 250 : 20);
        const b = Math.round(s > 0.75 ? (s - 0.75) * 400 : 10);
        return `rgb(${r}, ${g}, ${b})`;
      } else {
        // Cyan Laser
        const b = Math.round(160 + s * 95);
        const g = Math.round(140 + s * 100);
        return `rgb(6, ${g}, ${b})`;
      }
    };

    // Obstacle Bluff Body (Airfoil/Cylinder in Center)
    const obstacle = {
      x: width * 0.38,
      y: height * 0.5,
      radius: 42,
    };

    // Mouse Tracking on Canvas
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mousePosRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
        isHovering: true,
      };
    };

    const onMouseLeave = () => {
      mousePosRef.current.isHovering = false;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // Simulation render loop
    let time = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      if (!isRunningRef.current) return;

      time += 0.03;

      // Dark fade trail
      ctx.fillStyle = 'rgba(6, 7, 10, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // Draw Stationary Center Bluff Body (Cylinder / Aerodynamic Obstacle)
      ctx.beginPath();
      ctx.arc(obstacle.x, obstacle.y, obstacle.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#121620';
      ctx.fill();
      ctx.strokeStyle = '#06B6D4';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Core Obstacle Annotation
      ctx.fillStyle = '#64748B';
      ctx.font = '10px monospace';
      ctx.fillText('BLUFF BODY', obstacle.x - 30, obstacle.y + 4);

      // Draw Interactive Cursor Obstacle if inside
      if (mousePosRef.current.isHovering) {
        const mx = mousePosRef.current.x;
        const my = mousePosRef.current.y;
        ctx.beginPath();
        ctx.arc(mx, my, 28, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(244, 63, 94, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(244, 63, 94, 0.15)';
        ctx.fill();
        ctx.fillStyle = '#F43F5E';
        ctx.font = '9px monospace';
        ctx.fillText('FORCE DEFLECTOR', mx - 45, my - 34);
      }

      // Draw Vector Field arrows if toggled
      if (showVectorsRef.current) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        const step = 45;
        for (let gx = step; gx < width; gx += step) {
          for (let gy = step; gy < height; gy += step) {
            // Deflection calculation
            let dx = gx - obstacle.x;
            let dy = gy - obstacle.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            let angle = 0;

            if (dist < obstacle.radius * 2.2) {
              angle = Math.atan2(dy, dx) * 0.6;
            }

            ctx.save();
            ctx.translate(gx, gy);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(-8, 0);
            ctx.lineTo(8, 0);
            ctx.lineTo(4, -3);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Update & Draw Particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Base aerodynamic flow to right
        let vx = (2.2 * flowSpeedRef.current);
        let vy = 0;

        // 1. Center Obstacle Deflection & Wake Vortex Shedding
        const dx = p.x - obstacle.x;
        const dy = p.y - obstacle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < obstacle.radius + 35) {
          const force = (obstacle.radius + 35 - dist) / (obstacle.radius + 35);
          const pushAngle = Math.atan2(dy, dx);
          vx += Math.cos(pushAngle) * force * 5.0;
          vy += Math.sin(pushAngle) * force * 5.0;
        }

        // Downstream wake turbulence (Von Kármán vortex street)
        if (p.x > obstacle.x + obstacle.radius && p.x < obstacle.x + 350) {
          const wakeDist = (p.x - obstacle.x) / 350;
          const vortexSine = Math.sin(p.x * 0.03 - time * 6) * vortexStrengthRef.current;
          vy += vortexSine * (1.5 * (1 - wakeDist));
        }

        // 2. Interactive Cursor Deflection
        if (mousePosRef.current.isHovering) {
          const mdx = p.x - mousePosRef.current.x;
          const mdy = p.y - mousePosRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 75) {
            const mforce = (75 - mdist) / 75;
            vx += (mdx / mdist) * mforce * 7.0;
            vy += (mdy / mdist) * mforce * 7.0;
          }
        }

        p.x += vx;
        p.y += vy;
        p.life++;

        const currentSpeed = Math.sqrt(vx * vx + vy * vy);
        const speedNorm = (currentSpeed - 1.5) / 6.0;

        // Render Particle Stream Line
        ctx.strokeStyle = getColor(speedNorm);
        ctx.lineWidth = Math.min(2.5, Math.max(1.0, currentSpeed * 0.4));
        ctx.beginPath();
        ctx.moveTo(p.x - vx * 1.5, p.y - vy * 1.5);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // Respawn if off-screen or end of life
        if (p.x > width + 20 || p.y < -20 || p.y > height + 20 || p.life > p.maxLife) {
          resetParticle(p);
        }
      }
    };

    render();

    return () => {
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative rounded-2xl bg-surface-subtle border border-white/10 overflow-hidden shadow-2xl flex flex-col">
      
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-white/10 bg-surface/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <div>
            <h4 className="font-display font-bold text-white text-base tracking-wide flex items-center gap-2">
              Style 04 · Physics & Simulation Visualization
            </h4>
            <span className="font-mono text-xs text-cyan-400/90 tracking-wider">
              NAVIER-STOKES COMPLIANT FLOW // VORTEX SHEDDING & DEFLECTION
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
            650+ REYNOLDS PARTICLES
          </span>
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 uppercase">
            COLOR: {colorMap}
          </span>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative w-full h-[380px] sm:h-[440px] bg-[#050608] cursor-crosshair">
        <canvas
          ref={canvasRef}
          width={860}
          height={440}
          className="w-full h-full"
        />

        {/* Hover Deflector Instructions Pill */}
        <div className="absolute top-4 left-4 pointer-events-none p-2 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-300 flex items-center gap-2">
          <Wind className="w-3.5 h-3.5 text-rose-400" />
          <span>Move Cursor across stream to generate aerodynamic vortex & deflection</span>
        </div>

        {/* Dynamic Color Scale Bar */}
        <div className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-surface/90 border border-white/10 backdrop-blur-md flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span>0 m/s</span>
          <div className={`w-28 h-2 rounded-full ${
            colorMap === 'plasma'
              ? 'bg-gradient-to-r from-purple-800 via-rose-500 to-yellow-400'
              : colorMap === 'viridis'
              ? 'bg-gradient-to-r from-indigo-900 via-emerald-600 to-yellow-300'
              : colorMap === 'thermal'
              ? 'bg-gradient-to-r from-neutral-900 via-red-600 to-white'
              : 'bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-200'
          }`} />
          <span className="text-white">12 m/s</span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="p-4 sm:p-5 border-t border-white/10 bg-surface/90 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Play/Pause & Color Maps */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/10"
          >
            {isRunning ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
            {isRunning ? 'Pause Sim' : 'Resume Sim'}
          </button>

          <button
            onClick={() => setShowVectors(!showVectors)}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors border ${
              showVectors
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            Vector Grid
          </button>

          <div className="flex items-center gap-1">
            {(['plasma', 'viridis', 'thermal', 'cyan'] as const).map((map) => (
              <button
                key={map}
                onClick={() => setColorMap(map)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-colors border ${
                  colorMap === map
                    ? 'bg-white/20 text-white border-white/40'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                {map}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders: Velocity & Vortex Wake */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>VELOCITY:</span>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.1"
              value={flowSpeed}
              onChange={(e) => setFlowSpeed(parseFloat(e.target.value))}
              className="w-20 accent-cyan-400 cursor-pointer"
            />
            <span className="text-white">{flowSpeed.toFixed(1)}x</span>
          </div>

          <div className="flex items-center gap-2">
            <span>VORTEX:</span>
            <input
              type="range"
              min="0.2"
              max="2.0"
              step="0.1"
              value={vortexStrength}
              onChange={(e) => setVortexStrength(parseFloat(e.target.value))}
              className="w-20 accent-cyan-400 cursor-pointer"
            />
            <span className="text-white">{vortexStrength.toFixed(1)}</span>
          </div>
        </div>

      </div>

      {/* Mandatory Conceptual Disclaimer */}
      <div className="px-5 py-2.5 bg-black/60 border-t border-white/5 text-center">
        <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
          * Note: Conceptual Scientific Visualization — Simulated particle velocity and vortex patterns are mathematical representations engineered for real-time visual demonstration.
        </p>
      </div>

    </div>
  );
};
