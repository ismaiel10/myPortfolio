'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Layers, Sliders, Shield, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const AssemblySequence: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(5); // 1 to 5 (5 is fully assembled)
  const [isPlaying, setIsPlaying] = useState(false);
  const [separationFactor, setSeparationFactor] = useState(0.0); // 0 (assembled) to 1 (fully exploded)

  const stepRef = useRef(5);
  const sepRef = useRef(0.0);
  const isPlayingRef = useRef(false);

  // Components references for animation
  const partsRef = useRef<{
    base: THREE.Group;
    stator: THREE.Group;
    rotor: THREE.Group;
    bearings: THREE.Group;
    housing: THREE.Group;
  } | null>(null);

  useEffect(() => {
    stepRef.current = currentStep;
    sepRef.current = separationFactor;
    isPlayingRef.current = isPlaying;
  }, [currentStep, separationFactor, isPlaying]);

  // Auto-play sequence timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 5) return 1;
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(5.5, 3.2, 5.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x06b6d4, 3);
    dirLight1.position.set(5, 8, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 2);
    dirLight2.position.set(-6, -3, -4);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 6, 15);
    pointLight.position.set(0, 3, 2);
    scene.add(pointLight);

    // Assembly Root
    const rootAssembly = new THREE.Group();
    scene.add(rootAssembly);

    // Materials
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x222834,
      metalness: 0.9,
      roughness: 0.2,
    });

    const copperMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      metalness: 0.85,
      roughness: 0.25,
    });

    const rotorCoreMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.88,
      roughness: 0.15,
      emissive: 0x011b24,
    });

    const ceramicMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.7,
      roughness: 0.1,
    });

    const housingMat = new THREE.MeshStandardMaterial({
      color: 0x0e131d,
      metalness: 0.85,
      roughness: 0.3,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });

    // 1. Stage 1: Base Mount & Bearing Flange
    const baseGroup = new THREE.Group();
    rootAssembly.add(baseGroup);

    const basePlate = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.7, 0.25, 48),
      titaniumMat
    );
    basePlate.rotation.z = Math.PI / 2;
    basePlate.position.x = -2.0;
    baseGroup.add(basePlate);

    // 2. Stage 2: Electromagnetic Stator Core
    const statorGroup = new THREE.Group();
    rootAssembly.add(statorGroup);

    const statorCore = new THREE.Mesh(
      new THREE.CylinderGeometry(1.35, 1.35, 1.4, 48, 1, true),
      titaniumMat
    );
    statorCore.rotation.z = Math.PI / 2;
    statorCore.position.x = -0.8;
    statorGroup.add(statorCore);

    // Copper winding coils around stator
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const coil = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.25, 0.18),
        copperMat
      );
      coil.position.x = -0.8;
      coil.position.y = Math.cos(angle) * 1.05;
      coil.position.z = Math.sin(angle) * 1.05;
      coil.rotation.x = angle;
      statorGroup.add(coil);
    }

    // 3. Stage 3: High-Torque Rotor Core & Shaft
    const rotorGroup = new THREE.Group();
    rootAssembly.add(rotorGroup);

    const shaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, 4.2, 32),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.1 })
    );
    shaft.rotation.z = Math.PI / 2;
    shaft.position.x = 0.2;
    rotorGroup.add(shaft);

    const rotorCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.85, 1.1, 32),
      rotorCoreMat
    );
    rotorCore.rotation.z = Math.PI / 2;
    rotorCore.position.x = 0.2;
    rotorGroup.add(rotorCore);

    // 4. Stage 4: Silicon Nitride Hybrid Bearings
    const bearingsGroup = new THREE.Group();
    rootAssembly.add(bearingsGroup);

    const bearingFront = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.12, 16, 32),
      ceramicMat
    );
    bearingFront.rotation.y = Math.PI / 2;
    bearingFront.position.x = 1.3;
    bearingsGroup.add(bearingFront);

    const bearingRear = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.12, 16, 32),
      ceramicMat
    );
    bearingRear.rotation.y = Math.PI / 2;
    bearingRear.position.x = -1.5;
    bearingsGroup.add(bearingRear);

    // 5. Stage 5: Aerodynamic Outer Housing
    const housingGroup = new THREE.Group();
    rootAssembly.add(housingGroup);

    const housing = new THREE.Mesh(
      new THREE.CylinderGeometry(1.65, 1.65, 2.6, 48, 1, true),
      housingMat
    );
    housing.rotation.z = Math.PI / 2;
    housing.position.x = 0.3;
    housingGroup.add(housing);

    partsRef.current = {
      base: baseGroup,
      stator: statorGroup,
      rotor: rotorGroup,
      bearings: bearingsGroup,
      housing: housingGroup,
    };

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animateLoop = () => {
      animId = requestAnimationFrame(animateLoop);
      const delta = clock.getDelta();

      // Slow passive turntable rotation
      rootAssembly.rotation.y += delta * 0.2;

      // Calculate dynamic exploded offsets based on current step and separation slider
      const step = stepRef.current;
      const sep = sepRef.current;

      // Visibility based on assembly stage:
      baseGroup.visible = step >= 1;
      statorGroup.visible = step >= 2;
      rotorGroup.visible = step >= 3;
      bearingsGroup.visible = step >= 4;
      housingGroup.visible = step >= 5;

      // Axial separation distances:
      const explodeMultiplier = sep > 0 ? sep * 2.2 : (5 - step) * 0.4;

      const targetBaseX = -2.0 - explodeMultiplier * 1.5;
      const targetStatorX = -0.8 - explodeMultiplier * 0.8;
      const targetRotorX = 0.2;
      const targetBearingsX = 1.3 + explodeMultiplier * 0.9;
      const targetHousingX = 0.3 + explodeMultiplier * 1.8;

      baseGroup.position.x += (targetBaseX - baseGroup.position.x) * 0.1;
      statorGroup.position.x += (targetStatorX - statorGroup.position.x) * 0.1;
      rotorGroup.position.x += (targetRotorX - rotorGroup.position.x) * 0.1;
      bearingsGroup.position.x += (targetBearingsX - bearingsGroup.position.x) * 0.1;
      housingGroup.position.x += (targetHousingX - housingGroup.position.x) * 0.1;

      // Spin rotor when assembled or partly visible
      if (rotorGroup.visible) {
        rotorGroup.rotation.x += delta * 3.0;
      }

      renderer.render(scene, camera);
    };

    animateLoop();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const stages = [
    {
      step: 1,
      title: 'Stage 01: Base Mount & Bearing Flange',
      material: 'Titanium Ti-6Al-4V',
      weight: '1.42 kg',
      spec: 'Precision CNC-machined structural base with vibration damping gaskets.',
    },
    {
      step: 2,
      title: 'Stage 02: Electromagnetic Stator Core',
      material: 'Silicon Steel Laminations & Copper Magnet Wire',
      weight: '3.18 kg',
      spec: '12-pole three-phase winding array with high-permeability magnetic slot liners.',
    },
    {
      step: 3,
      title: 'Stage 03: High-Torque Rotor & Drive Shaft',
      material: 'Cobalt-Iron Core & 300M High-Strength Steel Shaft',
      weight: '2.64 kg',
      spec: 'Neodymium-Iron-Boron (NdFeB) permanent magnet surface configuration.',
    },
    {
      step: 4,
      title: 'Stage 04: Hybrid Ceramic Bearings',
      material: 'Silicon Nitride (Si3N4) Ceramic Balls',
      weight: '0.38 kg',
      spec: 'High-speed DN factor rating exceeding 1.8 × 10^6, zero galvanic corrosion.',
    },
    {
      step: 5,
      title: 'Stage 05: Carbon-Composite Outer Housing',
      material: 'Toray T800 Carbon Fiber & Cyanate Ester Resin',
      weight: '1.15 kg',
      spec: 'Aerodynamic cylindrical containment shroud providing IP68 environmental sealing.',
    },
  ];

  const currentStageInfo = stages[currentStep - 1] || stages[4];

  return (
    <div className="relative rounded-2xl bg-surface-subtle border border-white/10 overflow-hidden shadow-2xl flex flex-col">
      
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-white/10 bg-surface/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <div>
            <h4 className="font-display font-bold text-white text-base tracking-wide flex items-center gap-2">
              Style 03 · Product Assembly Sequence
            </h4>
            <span className="font-mono text-xs text-cyan-400/90 tracking-wider">
              SEQUENTIAL 3D CAD EXPLODED VIEW // 5-STAGE KINEMATICS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="cyan" size="sm">
            STAGE 0{currentStep} OF 05
          </Badge>
          <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
            {currentStep === 5 ? 'FULLY ASSEMBLED' : 'SUB-ASSEMBLY'}
          </span>
        </div>
      </div>

      {/* Main 3D Canvas + Stage HUD */}
      <div className="relative w-full h-[380px] sm:h-[440px] bg-[#06070a]">
        <div ref={mountRef} className="w-full h-full" />

        {/* Stage Progress HUD Bar */}
        <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between gap-2 p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
          {stages.map((s) => (
            <button
              key={s.step}
              onClick={() => setCurrentStep(s.step)}
              className={`flex-1 py-1.5 px-2 rounded-lg font-mono text-[10px] sm:text-xs uppercase tracking-wider text-center transition-all ${
                currentStep === s.step
                  ? 'bg-cyan-500/30 text-white border border-cyan-500/60 shadow-glow-cyan'
                  : currentStep > s.step
                  ? 'bg-white/10 text-cyan-300 border border-white/10'
                  : 'bg-white/5 text-slate-500 border border-transparent'
              }`}
            >
              <span className="hidden sm:inline">STAGE </span>0{s.step}
            </button>
          ))}
        </div>

        {/* Floating Active Stage Specs Card */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 rounded-xl bg-surface/90 border border-cyan-500/30 backdrop-blur-md shadow-glow-cyan">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
              <span>ACTIVE COMPONENT INSPECTOR</span>
              <span>WT: {currentStageInfo.weight}</span>
            </div>
            <h5 className="font-display font-bold text-white text-sm sm:text-base">
              {currentStageInfo.title}
            </h5>
            <div className="text-xs font-mono text-slate-300">
              <span className="text-slate-400">MATERIAL:</span> {currentStageInfo.material}
            </div>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {currentStageInfo.spec}
            </p>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="p-4 sm:p-5 border-t border-white/10 bg-surface/90 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Step Prev / Next / Auto-Play / Reset */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white disabled:opacity-40 border border-white/10"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/10"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
            {isPlaying ? 'Pause Sequence' : 'Auto-Play CAD'}
          </button>

          <button
            onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1))}
            disabled={currentStep === 5}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white disabled:opacity-40 border border-white/10"
            aria-label="Next step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setCurrentStep(1);
              setSeparationFactor(0.0);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-mono text-xs uppercase border border-white/10"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>

        {/* Explode Distance Slider */}
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <Sliders className="w-3.5 h-3.5 text-cyan-400" />
          <span>EXPLODE OFFSET:</span>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.05"
            value={separationFactor}
            onChange={(e) => setSeparationFactor(parseFloat(e.target.value))}
            className="w-28 accent-cyan-400 cursor-pointer"
          />
          <span className="text-white">{Math.round(separationFactor * 100)}%</span>
        </div>

      </div>

    </div>
  );
};
