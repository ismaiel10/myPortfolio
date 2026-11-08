'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Cpu, Code2, Mail } from 'lucide-react';

interface TocCard {
  number: string;
  category: string;
  title: string;
  desc: string;
  href: string;
  color: string;
  icon: React.ElementType;
}

export const TableOfContents: React.FC = () => {
  const cards: TocCard[] = [
    {
      number: '01',
      category: 'VENTURES & SYSTEMS',
      title: 'Selected Projects',
      desc: 'FixBazaar, Forgent AI Vision, Unique Diagnostic Centre, and The Last Bell.',
      href: '#work',
      color: '#06B6D4',
      icon: Layers,
    },
    {
      number: '02',
      category: 'INTERACTIVE SIMULATIONS',
      title: 'Engineering Visual Lab',
      desc: '3D Axial Turbine, FFT Telemetry Oscilloscope, CAD Kinematics, and Fluid Sim.',
      href: '#lab',
      color: '#3B82F6',
      icon: Cpu,
    },
    {
      number: '03',
      category: 'TECHNICAL MATRIX',
      title: 'Verified Skills & Tools',
      desc: 'Full-stack software engineering, AI/ML models, system design, and game dev tools.',
      href: '#skills',
      color: '#10B981',
      icon: Code2,
    },
    {
      number: '04',
      category: 'DIRECT DISPATCH',
      title: 'Contact & Collaboration',
      desc: 'Direct communication channels, GitHub, LinkedIn, and co-founding inquiries.',
      href: '#contact',
      color: '#8B5CF6',
      icon: Mail,
    },
  ];

  return (
    <section
      id="toc"
      className="relative min-h-[90vh] flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070709] overflow-hidden border-t border-white/5"
    >
      {/* Background Decorative Ambient Sweeping Glow from Slide 3 */}
      <div className="absolute -bottom-24 right-0 w-[600px] h-[350px] bg-gradient-to-l from-blue-700/20 via-cyan-500/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Glowing Chromatic Orb & Display Typography */}
          <div className="lg:col-span-5 flex flex-col items-start relative">
            {/* Luminous Multicolored Orb directly behind title (Slide 3 recreation) */}
            <div className="absolute -top-16 -left-12 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-cyan-500/35 via-blue-600/30 to-amber-500/15 blur-[90px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-mono text-xs text-slate-300 tracking-widest uppercase">
                  Directory Index · 03
                </span>
              </div>

              {/* Bold Stacked Title from Slide 3 */}
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
                Table of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  Content
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-md font-light leading-relaxed">
                Structured navigation index across verified software architectures, interactive 3D simulations, and engineering capabilities.
              </p>

              <div className="mt-8 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
                  Four Primary Hubs
                </span>
                <span>•</span>
                <span>Click Card to Jump</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 4 Modular Glassmorphic Cards (Exact Slide 3 Styling) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link
                    href={card.href}
                    className="group relative block h-full rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 p-6 sm:p-7 transition-all duration-300 backdrop-blur-xl shadow-xl overflow-hidden"
                  >
                    {/* Corner Accent Glow on Hover */}
                    <div
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                      style={{ backgroundColor: card.color }}
                    />

                    {/* Header Row: Category Badge & Arrow */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                        {card.category}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-cyan-400/40 transition-colors">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Center: Title & Description */}
                    <div className="mb-8">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>

                    {/* Foot Row: Large Index Number (Slide 3 Signature Detail) */}
                    <div className="flex items-baseline justify-between pt-4 border-t border-white/5">
                      <span className="font-mono text-xs text-slate-400 group-hover:text-slate-300">
                        View Section
                      </span>
                      <span
                        className="font-display text-4xl sm:text-5xl font-black tracking-tight"
                        style={{ color: card.color }}
                      >
                        {card.number}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
