'use client';

import React from 'react';
import { ArrowDownRight, Layers, Cpu, Code2, Compass, Mail, User } from 'lucide-react';

interface TocItem {
  number: string;
  title: string;
  subtitle: string;
  href: string;
  icon: React.ElementType;
  tag: string;
  color: string;
}

export const TableOfContents: React.FC = () => {
  const items: TocItem[] = [
    {
      number: '01',
      title: 'About Me',
      subtitle: 'Engineering mindset, AI/ML education at VVCE Mysuru, & product philosophy',
      href: '#about',
      icon: User,
      tag: 'IDENTITY & MINDSET',
      color: '#06B6D4',
    },
    {
      number: '02',
      title: 'Selected Work',
      subtitle: 'FixBazaar, Complaint Platform, UDC Diagnostics, & The Last Bell',
      href: '#work',
      icon: Layers,
      tag: 'REAL SYSTEMS',
      color: '#3B82F6',
    },
    {
      number: '03',
      title: 'Engineering Lab',
      subtitle: '3D Mechanical cutaway, live telemetry, CAD exploded assembly & fluid dynamics',
      href: '#lab',
      icon: Cpu,
      tag: 'SIGNATURE DEMOS',
      color: '#8B5CF6',
    },
    {
      number: '04',
      title: 'Capabilities',
      subtitle: 'Python, TypeScript, C#, React, Next.js, Flask, Supabase, Unity & ML systems',
      href: '#capabilities',
      icon: Code2,
      tag: 'TECHNICAL MATRIX',
      color: '#10B981',
    },
    {
      number: '05',
      title: 'My Journey',
      subtitle: 'Academic background, systems architecture milestones, and startup initiatives',
      href: '#journey',
      icon: Compass,
      tag: 'VERIFIED TRAJECTORY',
      color: '#F59E0B',
    },
    {
      number: '06',
      title: 'Initiate Contact',
      subtitle: 'Direct communication channels, inquiries, co-founding & collaboration',
      href: '#contact',
      icon: Mail,
      tag: 'DIRECT DISPATCH',
      color: '#F43F5E',
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#070709] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Central Reel-Style Badge */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-muted/90 border border-cyan-500/30 text-white shadow-glow-cyan mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-cyan-300">
              Table of Content°
            </span>
          </div>
          <p className="font-mono text-xs text-slate-400 tracking-wider uppercase">
            Architectural Index & Portfolio Navigation
          </p>
        </div>

        {/* Modular Grid of TOC Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.number}
                href={item.href}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-surface-subtle/80 hover:bg-surface-muted/90 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 shadow-card-rim hover:shadow-glow-cyan hover:-translate-y-1"
              >
                {/* Top Row: Index number + Tag + Arrow */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-white/40 group-hover:text-cyan-400 transition-colors">
                      {item.number}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-cyan-500/20 border border-white/10 group-hover:border-cyan-500/40 flex items-center justify-center text-slate-400 group-hover:text-cyan-300 transition-all">
                      <ArrowDownRight className="w-4 h-4 transition-transform group-hover:rotate-[-45deg]" />
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
                      style={{ color: item.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mt-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom line marker */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>INDEX ENTRY</span>
                  <span className="group-hover:text-cyan-400 transition-colors">JUMP TO SECTION →</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
