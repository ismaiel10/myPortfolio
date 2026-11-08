'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechnicalCutaway } from './TechnicalCutaway';
import { TelemetryInfographic } from './TelemetryInfographic';
import { AssemblySequence } from './AssemblySequence';
import { PhysicsSimulation } from './PhysicsSimulation';
import { Cpu, Activity, Layers, Wind, Sparkles } from 'lucide-react';

export const EngineeringLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cutaway' | 'telemetry' | 'assembly' | 'physics'>('cutaway');

  const tabs = [
    {
      id: 'cutaway' as const,
      number: '01',
      title: '3D Technical Cutaway',
      subtitle: 'Axial turbine with internal flow & exploded inspection',
      icon: Cpu,
    },
    {
      id: 'telemetry' as const,
      number: '02',
      title: 'Telemetry & Infographics',
      subtitle: 'Dynamic oscilloscope, FFT spectrum & sensor gauges',
      icon: Activity,
    },
    {
      id: 'assembly' as const,
      number: '03',
      title: 'Product CAD Assembly',
      subtitle: '5-stage sequential exploded-view kinematics',
      icon: Layers,
    },
    {
      id: 'physics' as const,
      number: '04',
      title: 'Physics & Fluid Simulation',
      subtitle: 'Navier-Stokes flow field & interactive vortex shedding',
      icon: Wind,
    },
  ];

  return (
    <section id="lab" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0b0f] border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="03"
          badge="SIGNATURE RESEARCH SUITE"
          title="Engineering Visual Lab"
          subtitle="A dedicated creative technology sandbox demonstrating my interest in engineering, scientific visualization, technical computing, and visual storytelling across 4 interactive real-time demonstrations."
          badgeVariant="indigo"
        />

        {/* 4-Tab Selector Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-surface-elevated border-cyan-500/50 shadow-glow-cyan -translate-y-0.5'
                    : 'bg-surface-subtle border-white/5 hover:border-white/20 hover:bg-surface-muted'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    STYLE {tab.number}
                  </span>
                  <div className={`p-1.5 rounded-md ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white">
                    {tab.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 font-light line-clamp-2">
                    {tab.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Demonstration Display */}
        <div className="w-full">
          {activeTab === 'cutaway' && <TechnicalCutaway />}
          {activeTab === 'telemetry' && <TelemetryInfographic />}
          {activeTab === 'assembly' && <AssemblySequence />}
          {activeTab === 'physics' && <PhysicsSimulation />}
        </div>

      </div>
    </section>
  );
};
