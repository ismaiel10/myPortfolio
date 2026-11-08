'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, Eye, RotateCw, ZoomIn, Layers, Info } from 'lucide-react';

export const TechnicalCutaway: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCutaway, setIsCutaway] = useState(true);
  const [isExploded, setIsExploded] = useState(false);
  const [showFlow, setShowFlow] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1.0);
  const [activeCallout, setActiveCallout] = useState<string | null>('rotor');

  // Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const casingGroupRef = useRef<THREE.Group | null>(null);
  const rotorGroupRef = useRef<THREE.Group | null>(null);
  const statorGroupRef = useRef<THREE.Group | null>(null);
  const bearingsGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const particleGeoRef = useRef<THREE.BufferGeometry | null>(null);
  const speedRef = useRef(1.0);
  const playingRef = useRef(true);
  const explodedRef = useRef(false);
  const cutawayRef = useRef(true);

  // Sync state refs
  useEffect(() => {
    speedRef.current = rotationSpeed;
    playingRef.current = isPlaying;
    explodedRef.current = isExploded;
    cutawayRef.current = isCutaway;
  }, [rotationSpeed, isPlaying, isExploded, isCutaway]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(4.5, 2.5, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x06b6d4, 3);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 2.5);
    dirLight2.position.set(-5, -4, -3);
    scene.add(dirLight2);

    const pointKey = new THREE.PointLight(0xffffff, 8, 20);
    pointKey.position.set(0, 4, 3);
    scene.add(pointKey);

    // Root Assembly Group
    const assembly = new THREE.Group();
    scene.add(assembly);

    // Materials
    const casingMatCutaway = new THREE.MeshStandardMaterial({
      color: 0x1e2430,
      metalness: 0.85,
      roughness: 0.25,
      side: THREE.DoubleSide,
    });

    const rotorMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x022533,
    });

    const statorMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.8,
      roughness: 0.3,
    });

    const shaftMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.1,
    });

    const bearingMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
    });

    // 1. Casing Group (Outer Shell with Cutaway Option)
    const casingGroup = new THREE.Group();
    casingGroupRef.current = casingGroup;
    assembly.add(casingGroup);

    // Create cutaway cylinder shell (thetaLength 1.5 * PI for 270 deg cutaway)
    const casingCutawayGeo = new THREE.CylinderGeometry(1.6, 1.6, 3.2, 48, 1, true, 0, Math.PI * 1.5);
    const casingFullGeo = new THREE.CylinderGeometry(1.6, 1.6, 3.2, 48, 1, true);
    const casingMesh = new THREE.Mesh(casingCutawayGeo, casingMatCutaway);
    casingMesh.rotation.z = Math.PI / 2;
    casingGroup.add(casingMesh);

    // Flange Rings on Casing
    const flangeGeo = new THREE.TorusGeometry(1.6, 0.08, 16, 48);
    const flange1 = new THREE.Mesh(flangeGeo, statorMat);
    flange1.position.x = -1.6;
    flange1.rotation.y = Math.PI / 2;
    casingGroup.add(flange1);

    const flange2 = new THREE.Mesh(flangeGeo, statorMat);
    flange2.position.x = 1.6;
    flange2.rotation.y = Math.PI / 2;
    casingGroup.add(flange2);

    // 2. Central Drive Shaft & Rotor Group
    const rotorGroup = new THREE.Group();
    rotorGroupRef.current = rotorGroup;
    assembly.add(rotorGroup);

    // Drive Shaft
    const shaftGeo = new THREE.CylinderGeometry(0.22, 0.22, 4.4, 32);
    const shaftMesh = new THREE.Mesh(shaftGeo, shaftMat);
    shaftMesh.rotation.z = Math.PI / 2;
    rotorGroup.add(shaftMesh);

    // Multi-stage turbine blades on rotor
    const numStages = 4;
    const stagePositions = [-1.0, -0.3, 0.4, 1.1];
    const stageBladeCounts = [12, 16, 20, 24];
    const stageRadii = [1.35, 1.25, 1.15, 1.05];

    stagePositions.forEach((posX, stageIdx) => {
      const stageHub = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.15, 32),
        shaftMat
      );
      stageHub.position.x = posX;
      stageHub.rotation.z = Math.PI / 2;
      rotorGroup.add(stageHub);

      const blades = stageBladeCounts[stageIdx];
      const radius = stageRadii[stageIdx];

      for (let i = 0; i < blades; i++) {
        const angle = (i / blades) * Math.PI * 2;
        const bladeGeo = new THREE.BoxGeometry(0.04, radius - 0.4, 0.18);
        const blade = new THREE.Mesh(bladeGeo, rotorMat);
        blade.position.x = posX;
        blade.position.y = Math.cos(angle) * (radius / 2 + 0.2);
        blade.position.z = Math.sin(angle) * (radius / 2 + 0.2);
        blade.rotation.x = angle;
        blade.rotation.z = 0.25; // Aerodynamic pitch angle
        rotorGroup.add(blade);
      }
    });

    // 3. Stator Guide Vanes Group (Stationary between rotor stages)
    const statorGroup = new THREE.Group();
    statorGroupRef.current = statorGroup;
    assembly.add(statorGroup);

    const statorPositions = [-0.65, 0.05, 0.75];
    statorPositions.forEach((posX) => {
      const statorHub = new THREE.Mesh(
        new THREE.TorusGeometry(1.5, 0.04, 12, 32),
        statorMat
      );
      statorHub.position.x = posX;
      statorHub.rotation.y = Math.PI / 2;
      statorGroup.add(statorHub);

      for (let i = 0; i < 14; i++) {
        const angle = (i / 14) * Math.PI * 2;
        const vaneGeo = new THREE.BoxGeometry(0.03, 0.5, 0.14);
        const vane = new THREE.Mesh(vaneGeo, statorMat);
        vane.position.x = posX;
        vane.position.y = Math.cos(angle) * 1.2;
        vane.position.z = Math.sin(angle) * 1.2;
        vane.rotation.x = angle;
        vane.rotation.z = -0.3; // Opposing guide pitch
        statorGroup.add(vane);
      }
    });

    // 4. Ceramic Hybrid Bearings Group
    const bearingsGroup = new THREE.Group();
    bearingsGroupRef.current = bearingsGroup;
    assembly.add(bearingsGroup);

    [-1.8, 1.8].forEach((posX) => {
      const bearingRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.4, 0.12, 16, 32),
        bearingMat
      );
      bearingRing.position.x = posX;
      bearingRing.rotation.y = Math.PI / 2;
      bearingsGroup.add(bearingRing);
    });

    // 5. Internal Aerodynamic Airflow Particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    particleGeoRef.current = particleGeo;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 3.5;
      const angle = Math.random() * Math.PI * 2;
      const r = 0.5 + Math.random() * 0.9;
      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = Math.cos(angle) * r;
      particlePositions[i * 3 + 2] = Math.sin(angle) * r;
      particleVelocities.push(0.02 + Math.random() * 0.04);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    particlesRef.current = particles;
    assembly.add(particles);

    // Mouse drag rotation & interaction
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      assembly.rotation.y += deltaX * 0.008;
      assembly.rotation.x += deltaY * 0.008;

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      const delta = clock.getDelta();

      // Rotor rotation
      if (playingRef.current && rotorGroup) {
        rotorGroup.rotation.x += delta * 6 * speedRef.current;
      }

      // Exploded interpolation
      const targetCasingY = explodedRef.current ? 1.5 : 0;
      const targetStatorY = explodedRef.current ? -1.0 : 0;
      const targetBearingsX = explodedRef.current ? 0.6 : 0;

      casingGroup.position.y += (targetCasingY - casingGroup.position.y) * 0.08;
      statorGroup.position.y += (targetStatorY - statorGroup.position.y) * 0.08;
      if (bearingsGroup.children[0]) {
        bearingsGroup.children[0].position.x += ((-1.8 - targetBearingsX) - bearingsGroup.children[0].position.x) * 0.08;
      }
      if (bearingsGroup.children[1]) {
        bearingsGroup.children[1].position.x += ((1.8 + targetBearingsX) - bearingsGroup.children[1].position.x) * 0.08;
      }

      // Airflow Particles Animation
      if (particlesRef.current && particleGeoRef.current) {
        const positions = particleGeoRef.current.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] += particleVelocities[i] * (playingRef.current ? speedRef.current : 0.2);
          // Loop back
          if (positions[i * 3] > 2.0) {
            positions[i * 3] = -2.0;
          }
          // Slight swirl
          const y = positions[i * 3 + 1];
          const z = positions[i * 3 + 2];
          const angle = 0.02 * (playingRef.current ? speedRef.current : 0.2);
          positions[i * 3 + 1] = y * Math.cos(angle) - z * Math.sin(angle);
          positions[i * 3 + 2] = y * Math.sin(angle) + z * Math.cos(angle);
        }
        particleGeoRef.current.attributes.position.needsUpdate = true;
      }

      // Slow passive yaw if not dragging
      if (!isDragging) {
        assembly.rotation.y += delta * 0.15;
      }

      renderer.render(scene, camera);
    };

    renderLoop();

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
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Toggle Cutaway geometry
  const handleToggleCutaway = () => {
    setIsCutaway(!isCutaway);
    if (!casingGroupRef.current) return;
    const mesh = casingGroupRef.current.children[0] as THREE.Mesh;
    if (mesh) {
      mesh.geometry.dispose();
      mesh.geometry = !isCutaway
        ? new THREE.CylinderGeometry(1.6, 1.6, 3.2, 48, 1, true, 0, Math.PI * 1.5)
        : new THREE.CylinderGeometry(1.6, 1.6, 3.2, 48, 1, true);
    }
  };

  const callouts = [
    {
      id: 'rotor',
      title: 'Aerodynamic Rotor Stage',
      desc: 'Four-stage bladed turbine manufactured from lightweight Titanium-Aluminide alloy with 18° blade camber angle.',
    },
    {
      id: 'stator',
      title: 'Stationary Guide Vanes',
      desc: 'Fixed aerodynamic deflector ring optimizing air compression flow angle before each subsequent rotor stage.',
    },
    {
      id: 'bearings',
      title: 'Hybrid Ceramic Bearings',
      desc: 'Silicon Nitride (Si3N4) ball bearings engineered for high-RPM operation with zero thermal expansion seize.',
    },
    {
      id: 'casing',
      title: 'Aero-Composite Shell',
      desc: 'Structural containment jacket featuring 270° cutaway window for thermal radiation and borescope inspection.',
    },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#181817] text-white border border-black/[0.1] shadow-editorial flex flex-col">
      {/* Header Bar */}
      <div className="p-5 sm:p-6 border-b border-white/[0.08] bg-[#141413] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent-olive" />
          <div>
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">
              3D Axial Turbine Explainer
            </h4>
            <span className="font-mono text-xs text-stone-light tracking-wider">
              Procedural WebGL Mechanical Model & Kinematic Flow
            </span>
          </div>
        </div>

        {/* Live Status Indicators */}
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stone-light">
            {isCutaway ? 'View: Cutaway' : 'View: Full Casing'}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stone-light">
            {isExploded ? 'State: Exploded' : 'State: Assembled'}
          </span>
          <span className="px-3 py-1 rounded-full bg-accent-olive/20 border border-accent-olive/40 text-stone-light">
            {isPlaying ? `${Math.round(rotationSpeed * 9200)} RPM` : 'Standby'}
          </span>
        </div>
      </div>

      {/* 3D Canvas Area */}
      <div className="relative w-full h-[400px] sm:h-[480px] bg-[#141413] cursor-grab active:cursor-grabbing">
        <div ref={mountRef} className="w-full h-full" />

        {/* Floating Instructions Pill */}
        <div className="absolute top-4 left-4 pointer-events-none px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-stone-light flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5 text-stone-light" />
          <span>Click & Drag to Rotate 3D Model</span>
        </div>

        {/* Active Callout Overlay Card */}
        {activeCallout && (
          <div className="absolute bottom-4 left-4 max-w-sm p-4 rounded-xl bg-charcoal/90 border border-white/15 backdrop-blur-md shadow-2xl">
            {callouts
              .filter((c) => c.id === activeCallout)
              .map((c) => (
                <div key={c.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-accent-olive tracking-widest">
                      Component Detail
                    </span>
                    <button
                      onClick={() => setActiveCallout(null)}
                      className="text-stone hover:text-white text-xs font-mono"
                    >
                      ✕
                    </button>
                  </div>
                  <h5 className="font-serif text-sm font-medium text-white">
                    {c.title}
                  </h5>
                  <p className="text-xs text-stone-light font-light leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Control Bar & Component Selectors */}
      <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-[#141413] flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Playback & View Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/10 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? 'Pause' : 'Rotate'}
          </button>

          <button
            onClick={handleToggleCutaway}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-colors border cursor-pointer ${
              isCutaway
                ? 'bg-white/20 text-white border-white/30'
                : 'bg-white/5 text-stone-light border-white/10 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Cutaway View
          </button>

          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-colors border cursor-pointer ${
              isExploded
                ? 'bg-white/20 text-white border-white/30'
                : 'bg-white/5 text-stone-light border-white/10 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Explode Parts
          </button>
        </div>

        {/* Speed Slider & Callout Selector Pills */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-light">
            <span>SPEED:</span>
            <input
              type="range"
              min="0.2"
              max="2.5"
              step="0.1"
              value={rotationSpeed}
              onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
              className="w-24 accent-white cursor-pointer"
            />
            <span className="text-white">{rotationSpeed.toFixed(1)}x</span>
          </div>

          <div className="flex items-center gap-1.5">
            {callouts.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCallout(c.id)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-colors border cursor-pointer ${
                  activeCallout === c.id
                    ? 'bg-white text-charcoal border-white font-semibold'
                    : 'bg-white/5 text-stone-light border-white/10 hover:text-white'
                }`}
              >
                {c.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
