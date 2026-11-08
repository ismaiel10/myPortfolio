'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { capabilitiesData } from '@/data/capabilities';
import { Code2, Layers, Database, Cpu, Compass, CheckCircle2, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const Capabilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredData =
    selectedCategory === 'all'
      ? capabilitiesData
      : capabilitiesData.filter((domain) => domain.id === selectedCategory);

  const categories = [
    { id: 'all', label: 'Complete Matrix' },
    { id: 'programming-languages', label: 'Languages' },
    { id: 'frontend-systems', label: 'Frontend & Mobile' },
    { id: 'backend-databases', label: 'Backend & Data' },
    { id: 'specialized-domains', label: 'Engines & Graphics' },
    { id: 'mindset-disciplines', label: 'Product & Mindset' },
  ];

  return (
    <section id="capabilities" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            number="04"
            badge="TECHNICAL MATRIX"
            title="Capabilities & Technical Architecture"
            subtitle="Verified engineering disciplines, programming languages, and framework proficiencies applied across my software projects and academic coursework."
            badgeVariant="emerald"
            className="mb-0"
          />

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-surface-subtle p-3 rounded-xl border border-white/10 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Fact-Based Scope: Zero Invented Percentages</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-white/5 text-slate-400 border border-white/5 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.flatMap((domain) =>
            domain.technologies.map((tech) => (
              <div
                key={tech.name}
                className="group relative p-6 rounded-2xl bg-surface-subtle border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-card-rim hover:shadow-glow-cyan hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase text-emerald-400/90 tracking-wider">
                      {domain.badge}
                    </span>
                    <Terminal className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <h4 className="font-display text-xl font-bold text-white group-hover:text-emerald-200 transition-colors mb-2">
                    {tech.name}
                  </h4>

                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>PROVEN IN:</span>
                  <span className="text-slate-300 text-right truncate max-w-[180px]">
                    {tech.appliedIn}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
