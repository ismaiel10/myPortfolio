'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Activity, Radio, Gauge, Zap, Flame, BarChart3 } from 'lucide-react';

export const TelemetryInfographic: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fftCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [activeChannel, setActiveChannel] = useState<'acoustic' | 'thermal' | 'vibration'>('acoustic');
  const [signalFrequency, setSignalFrequency] = useState(2.4);
  const [noiseLevel, setNoiseLevel] = useState(0.15);

  // Dynamic telemetry states
  const [telemetry, setTelemetry] = useState({
    rpm: 12450,
    temp: 248.5,
    pressure: 34.2,
    vibration: 1.42,
    efficiency: 94.8,
  });

  const isRunningRef = useRef(true);
  const freqRef = useRef(2.4);
  const noiseRef = useRef(0.15);
  const channelRef = useRef<'acoustic' | 'thermal' | 'vibration'>('acoustic');

  useEffect(() => {
    isRunningRef.current = isRunning;
    freqRef.current = signalFrequency;
    noiseRef.current = noiseLevel;
    channelRef.current = activeChannel;
  }, [isRunning, signalFrequency, noiseLevel, activeChannel]);

  // Telemetry metric updater
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        rpm: Math.round(12400 + Math.sin(Date.now() * 0.002) * 450 + (Math.random() - 0.5) * 80),
        temp: +(245 + Math.sin(Date.now() * 0.001) * 12 + (Math.random() - 0.5) * 2).toFixed(1),
        pressure: +(34.0 + Math.cos(Date.now() * 0.0015) * 1.8 + (Math.random() - 0.5) * 0.4).toFixed(1),
        vibration: +(1.4 + Math.sin(Date.now() * 0.003) * 0.3 + Math.random() * 0.1).toFixed(2),
        efficiency: +(94.5 + Math.sin(Date.now() * 0.0008) * 0.8).toFixed(1),
      }));
    }, 150);
    return () => clearInterval(interval);
  }, [isRunning]);

  // Main Waveform Oscilloscope Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      if (!isRunningRef.current) return;

      time += 0.04;
      const w = canvas.width;
      const h = canvas.height;

      // Clear with slight persistence
      ctx.fillStyle = 'rgba(7, 8, 12, 0.25)';
      ctx.fillRect(0, 0, w, h);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 30;

      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Center Baseline
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Multi-Channel Waveforms
      const centerY = h / 2;
      const primaryColor =
        channelRef.current === 'acoustic'
          ? '#06B6D4'
          : channelRef.current === 'thermal'
          ? '#F59E0B'
          : '#8B5CF6';

      // Waveform 1: Primary Signal
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = 12;

      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const normX = x / w;
        let y = centerY;

        if (channelRef.current === 'acoustic') {
          // Complex harmonic audio resonance
          y +=
            Math.sin(normX * 25 * freqRef.current - time * 4) * 45 +
            Math.sin(normX * 50 * freqRef.current + time * 2) * 18 +
            (Math.random() - 0.5) * (noiseRef.current * 40);
        } else if (channelRef.current === 'thermal') {
          // Thermal gradient fluctuation
          y +=
            Math.sin(normX * 8 * freqRef.current - time * 1.5) * 55 +
            Math.cos(normX * 16 + time) * 15 +
            (Math.random() - 0.5) * (noiseRef.current * 20);
        } else {
          // Structural strain & sharp transient spikes
          const spike = Math.sin(normX * 12 - time * 3) > 0.85 ? 35 : 0;
          y +=
            Math.sin(normX * 18 * freqRef.current - time * 5) * 35 +
            spike +
            (Math.random() - 0.5) * (noiseRef.current * 45);
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Waveform 2: Faded Carrier Wave
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x += 3) {
        const normX = x / w;
        const y = centerY + Math.cos(normX * 12 - time * 2) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  // FFT Frequency Spectrum Bars Canvas
  useEffect(() => {
    const canvas = fftCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const barCount = 32;

    const renderFFT = () => {
      animId = requestAnimationFrame(renderFFT);
      if (!isRunningRef.current) return;

      time += 0.05;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const barWidth = (w / barCount) - 2;

      for (let i = 0; i < barCount; i++) {
        const norm = i / barCount;
        // Frequency envelope
        const baseHeight = Math.sin(norm * Math.PI) * (h * 0.75);
        const dynamicPulse = Math.abs(Math.sin(norm * 10 + time * 3)) * 20;
        const jitter = (Math.random() - 0.5) * (noiseRef.current * 30);
        const barHeight = Math.max(4, baseHeight + dynamicPulse + jitter);

        const x = i * (barWidth + 2);
        const y = h - barHeight;

        // Gradient based on channel
        const grad = ctx.createLinearGradient(0, y, 0, h);
        grad.addColorStop(0, '#06B6D4');
        grad.addColorStop(0.6, '#3B82F6');
        grad.addColorStop(1, 'rgba(37, 99, 235, 0.2)');

        ctx.fillStyle = grad;
        ctx.fillRect(x, y, barWidth, barHeight);
      }
    };

    renderFFT();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative rounded-2xl bg-[#181817] text-white border border-black/[0.1] shadow-editorial overflow-hidden flex flex-col">
      
      {/* Top Header */}
      <div className="p-5 sm:p-6 border-b border-white/[0.08] bg-[#141413] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent-olive" />
          <div>
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">
              Engineering Telemetry & Signal FFT
            </h4>
            <span className="font-mono text-xs text-stone-light tracking-wider">
              Real-time multi-channel sensor harmonics & acoustic frequency analysis
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-3 py-1 rounded-full bg-accent-olive/20 border border-accent-olive/40 text-stone-light">
            {isRunning ? 'Status: Active Feed' : 'Status: Paused'}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stone-light hidden sm:inline">
            48,000 Hz Sample Bus
          </span>
        </div>
      </div>

      {/* Main Grid: Telemetry Gauges + Oscilloscope */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#141413]">
        
        {/* Left Column: 4 Real-Time Metrics & Gauges */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
          
          <div className="p-4 rounded-xl bg-[#1c1c1b] border border-white/[0.08] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-stone-light">
              <span className="flex items-center gap-1.5 text-stone-light">
                <Gauge className="w-4 h-4 text-stone-light" /> Core Velocity
              </span>
              <span className="text-[10px] text-stone">CH-01</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-2xl sm:text-3xl font-light text-white tracking-tight">
                {telemetry.rpm.toLocaleString()}
              </span>
              <span className="text-xs font-mono text-stone-light">RPM</span>
            </div>
            <div className="mt-2 w-full h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-stone-light transition-all duration-200"
                style={{ width: `${(telemetry.rpm / 15000) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1c1c1b] border border-white/[0.08] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-stone-light">
              <span className="flex items-center gap-1.5 text-stone-light">
                <Flame className="w-4 h-4 text-stone-light" /> Thermal Gradient
              </span>
              <span className="text-[10px] text-stone">CH-02</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-2xl sm:text-3xl font-light text-white tracking-tight">
                {telemetry.temp}
              </span>
              <span className="text-xs font-mono text-stone-light">°C</span>
            </div>
            <div className="mt-2 w-full h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-amber-400/80 transition-all duration-200"
                style={{ width: `${(telemetry.temp / 350) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1c1c1b] border border-white/[0.08] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-stone-light">
              <span className="flex items-center gap-1.5 text-stone-light">
                <Zap className="w-4 h-4 text-stone-light" /> Line Pressure
              </span>
              <span className="text-[10px] text-stone">CH-03</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-2xl sm:text-3xl font-light text-white tracking-tight">
                {telemetry.pressure}
              </span>
              <span className="text-xs font-mono text-stone-light">BAR</span>
            </div>
            <div className="mt-2 w-full h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-stone-light transition-all duration-200"
                style={{ width: `${(telemetry.pressure / 50) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1c1c1b] border border-white/[0.08] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-stone-light">
              <span className="flex items-center gap-1.5 text-stone-light">
                <Activity className="w-4 h-4 text-stone-light" /> Strain G-Force
              </span>
              <span className="text-[10px] text-stone">CH-04</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-2xl sm:text-3xl font-light text-white tracking-tight">
                {telemetry.vibration}
              </span>
              <span className="text-xs font-mono text-stone-light">G-RMS</span>
            </div>
            <div className="mt-2 w-full h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-accent-olive transition-all duration-200"
                style={{ width: `${(telemetry.vibration / 3.0) * 100}%` }}
              />
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Oscilloscope + FFT Spectrum */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          
          {/* Main Oscilloscope Waveform Display */}
          <div className="relative rounded-xl overflow-hidden bg-[#10100f] border border-white/[0.08] p-3">
            <div className="flex items-center justify-between mb-2 px-2 text-xs font-mono text-stone-light">
              <span className="flex items-center gap-1.5 text-stone-light">
                <Radio className="w-3.5 h-3.5 text-accent-olive" />
                Waveform Oscilloscope [{activeChannel.toUpperCase()}]
              </span>
              <span className="text-stone text-[11px]">50mV / DIV</span>
            </div>
            <canvas
              ref={canvasRef}
              width={700}
              height={220}
              className="w-full h-[180px] sm:h-[210px] rounded-lg"
            />
          </div>

          {/* FFT Spectrum Display */}
          <div className="relative rounded-xl overflow-hidden bg-[#10100f] border border-white/[0.08] p-3">
            <div className="flex items-center justify-between mb-2 px-2 text-xs font-mono text-stone-light">
              <span className="flex items-center gap-1.5 text-stone-light">
                <BarChart3 className="w-3.5 h-3.5 text-stone-light" />
                FFT Harmonic Spectral Density (0 - 24 kHz)
              </span>
              <span className="text-stone text-[11px]">Peak: 12.4 kHz</span>
            </div>
            <canvas
              ref={fftCanvasRef}
              width={700}
              height={80}
              className="w-full h-[70px] sm:h-[80px] rounded-lg"
            />
          </div>

        </div>

      </div>

      {/* Control Bar & Scientific Disclaimer */}
      <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-[#141413] flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Playback & Channel Selection */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/10 cursor-pointer"
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? 'Pause Feed' : 'Resume Feed'}
          </button>

          <div className="flex items-center gap-1 text-xs font-mono">
            {(['acoustic', 'thermal', 'vibration'] as const).map((ch) => (
              <button
                key={ch}
                onClick={() => setActiveChannel(ch)}
                className={`px-3 py-1.5 rounded-full uppercase tracking-wider transition-colors border cursor-pointer ${
                  activeChannel === ch
                    ? 'bg-white text-charcoal border-white font-semibold'
                    : 'bg-white/5 text-stone-light border-white/10 hover:text-white'
                }`}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders: Frequency & Noise Injection */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-light">
          <div className="flex items-center gap-2">
            <span>FREQ:</span>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.1"
              value={signalFrequency}
              onChange={(e) => setSignalFrequency(parseFloat(e.target.value))}
              className="w-20 accent-white cursor-pointer"
            />
            <span className="text-white">{signalFrequency.toFixed(1)}k</span>
          </div>

          <div className="flex items-center gap-2">
            <span>NOISE:</span>
            <input
              type="range"
              min="0.0"
              max="0.5"
              step="0.05"
              value={noiseLevel}
              onChange={(e) => setNoiseLevel(parseFloat(e.target.value))}
              className="w-20 accent-white cursor-pointer"
            />
            <span className="text-white">{Math.round(noiseLevel * 100)}%</span>
          </div>
        </div>

      </div>

      {/* Explicit Scientific Disclaimer */}
      <div className="px-5 py-3 bg-[#10100f] border-t border-white/[0.05] text-center">
        <p className="font-mono text-[10px] text-stone uppercase tracking-wider">
          * Engineering telemetry simulation — Real-time continuous mathematical waveforms rendered for interface interaction.
        </p>
      </div>

    </div>
  );
};
