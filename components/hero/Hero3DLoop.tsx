'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DLoop: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Torus Knot Geometry (reminiscent of the glowing iridescent loop in the Reel)
    const geometry = new THREE.TorusKnotGeometry(1.3, 0.38, 128, 32, 2, 3);

    // High-end metallic / iridescent physical material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x111c30,
      emissive: 0x051329,
      roughness: 0.15,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.2,
      ior: 1.5,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Glowing wireframe overlay for subtle engineering CAD feel
    const wireframeGeometry = new THREE.TorusKnotGeometry(1.305, 0.385, 64, 16, 2, 3);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframeMesh);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Vibrant Rim & Key Lights (Electric Cyan & Royal Blue & Violet)
    const pointLightCyan = new THREE.PointLight(0x06b6d4, 15, 20);
    pointLightCyan.position.set(4, 3, 3);
    scene.add(pointLightCyan);

    const pointLightBlue = new THREE.PointLight(0x3b82f6, 18, 20);
    pointLightBlue.position.set(-4, -2, 2);
    scene.add(pointLightBlue);

    const pointLightViolet = new THREE.PointLight(0x8b5cf6, 12, 15);
    pointLightViolet.position.set(0, 4, -2);
    scene.add(pointLightViolet);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth idle rotation
      mesh.rotation.x = elapsedTime * 0.25;
      mesh.rotation.y = elapsedTime * 0.35;
      wireframeMesh.rotation.x = mesh.rotation.x;
      wireframeMesh.rotation.y = mesh.rotation.y;

      // Cursor parallax
      targetRotationX = mouseY * 0.4;
      targetRotationY = mouseX * 0.4;

      mesh.rotation.x += (targetRotationX - mesh.rotation.x * 0.1) * 0.05;
      mesh.rotation.y += (targetRotationY - mesh.rotation.y * 0.1) * 0.05;

      // Orbiting light pulse
      pointLightCyan.position.x = Math.sin(elapsedTime * 0.8) * 4;
      pointLightCyan.position.y = Math.cos(elapsedTime * 0.8) * 3;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center relative pointer-events-none"
    />
  );
};
