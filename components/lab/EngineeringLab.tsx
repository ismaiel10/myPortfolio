'use client';

import React, { useState } from 'react';
import { TechnicalCutaway } from './TechnicalCutaway';
import { TelemetryInfographic } from './TelemetryInfographic';
import { AssemblySequence } from './AssemblySequence';
import { PhysicsSimulation } from './PhysicsSimulation';
import { Sparkles, Eye, Wind, Layers, Activity, Cpu } from 'lucide-react';

export const EngineeringLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cutaway' | 'telemetry' | 'assembly' | 'physics'>('cutaway');

  const tabs = [
    {
      id: 'cutaway' as const,
      no: '01',
      title: '3D Mechanical Cutaway',
      subtitle: 'Axial turbine flow & internal exploded view in Three.js WebGL',
      icon: Cpu,
    },
    {
      id: 'telemetry' as const,
      no: '02',
      title: 'Data & Telemetry Visualization',
      subtitle: 'Real-time harmonic synthesizer & FFT frequency spectrum analyzer',
      icon: Activity,
    },
    {
      id: 'assembly' as const,
      no: '03',
      title: 'CAD Kinematic Assembly',
      subtitle: '5-stage sequential exploded-view mechanical decomposition',
      icon: Layers,
    },
    {
      id: 'physics' as const,
      no: '04',
      title: 'Navier-Stokes Fluid Dynamics',
      subtitle: 'Interactive velocity vector field and vortex shedding simulation',
      icon: Wind,
    },
  ];

  return (
    <section id="experiments" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-black/[0.08] gap-6 text-stone text-xs font-mono tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="text-charcoal font-semibold">(03)</span>
            <span>/</span>
            <span>THE PLAYGROUND — SELECTED EXPERIMENTS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-olive" />
            <span>Interactive Scientific Computing</span>
          </div>
        </div>

        {/* Narrative Intro */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
            Creative Technology & Simulations
          </h2>
          <p className="text-base sm:text-lg text-stone font-light leading-relaxed">
            A curated gallery of engineering experiments exploring 3D graphics, procedural simulation, mathematical visualization, and real-time physics.
          </p>
        </div>

        {/* Exhibition Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[140px] cursor-pointer ${
                  isActive
                    ? 'bg-paper border-charcoal shadow-lift'
                    : 'bg-surface/50 border-black/[0.06] hover:bg-surface hover:border-black/[0.14]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-accent-olive' : 'text-stone'}`}>
                    EXP. {tab.no}
                  </span>
                  <div className={`p-1.5 rounded-md ${isActive ? 'text-charcoal' : 'text-stone'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-base font-medium text-charcoal">
                    {tab.title}
                  </h4>
                  <p className="text-xs text-stone font-light mt-1 line-clamp-2">
                    {tab.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Exhibition Stage Plinth */}
        <div className="rounded-3xl bg-paper border border-black/[0.08] shadow-editorial p-6 sm:p-10 lg:p-12 overflow-hidden">
          {activeTab === 'cutaway' && <TechnicalCutaway />}
          {activeTab === 'telemetry' && <TelemetryInfographic />}
          {activeTab === 'assembly' && <AssemblySequence />}
          {activeTab === 'physics' && <PhysicsSimulation />}
        </div>

      </div>
    </section>
  );
};
