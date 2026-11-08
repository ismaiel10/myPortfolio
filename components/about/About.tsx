'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { GraduationCap, MapPin, Compass, Sparkles, Terminal, Rocket, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Systems & Software Engineering',
      desc: 'Architecting clean, type-safe full-stack platforms with resilient database constraints and modular state machines.',
    },
    {
      title: 'Artificial Intelligence & ML',
      desc: 'Pursuing theoretical and applied AI/ML at VVCE Mysuru, bridging data science with real-world product utility.',
    },
    {
      title: 'Product Architecture & UX',
      desc: 'Designing frictionless user flows, intentional typography, and systematic design tokens that respect user cognition.',
    },
    {
      title: 'Entrepreneurial Execution',
      desc: 'Founding FixBazaar from the ground up: identifying market inefficiencies, scoping roadmaps, and executing with speed.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0b0e] border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 -right-60 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="01"
          badge="IDENTITY & MINDSET"
          title="Bridging Engineering Rigor with Product Vision"
          subtitle="An ambitious approach to technology: understanding problems deeply, architecting systems methodically, and building products that endure."
          badgeVariant="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Portrait Treatment (Slide 2 Reel Inspired) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden bg-surface-subtle border border-white/10 shadow-card-rim group">
              <div className="relative w-full aspect-[4/5] bg-neutral-900">
                <Image
                  src="/images/black.png"
                  alt="Syed Ismaiel portrait — Vidyavardhaka College of Engineering"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-[50%_12%] grayscale contrast-110 group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-90" />
              </div>

              {/* Verified Details Card */}
              <div className="p-6 relative bg-surface border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-white text-lg">
                    Syed Ismaiel
                  </span>
                  <Badge variant="blue" size="sm">
                    Mysuru, Karnataka
                  </Badge>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>BTech in Artificial Intelligence & Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Vidyavardhaka College of Engineering (VVCE)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mindset Statement Card */}
            <div className="p-6 rounded-2xl bg-surface-muted/60 border border-white/5 backdrop-blur-md">
              <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest block mb-2">
                // CORE CONVICTION
              </span>
              <p className="text-sm text-slate-300 italic font-light leading-relaxed">
                &ldquo;Ambition is not demonstrated through exaggerated claims, but through the craftsmanship of the work, the precision of the systems, and the audacity of what is being built.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Hello, I am Syed Ismaiel.
              </h3>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
                <p>
                  I am a software developer, product builder, and aspiring technology founder currently pursuing my BTech in <strong className="text-white font-medium">Artificial Intelligence & Machine Learning</strong> at Vidyavardhaka College of Engineering in Mysuru, Karnataka.
                </p>
                <p>
                  I do not view engineering through the narrow lens of merely writing code to fulfill a prompt. For me, true technical craft begins when an idea is scrutinized, its architectural fundamentals are stress-tested, its user experience is carefully designed, and it is forged into a working, reliable reality.
                </p>
                <p>
                  I am fascinated by the intersection of six core domains: <span className="text-cyan-300 font-mono text-sm">Engineering</span>, <span className="text-cyan-300 font-mono text-sm">Technology</span>, <span className="text-cyan-300 font-mono text-sm">Business</span>, <span className="text-cyan-300 font-mono text-sm">Creativity</span>, <span className="text-cyan-300 font-mono text-sm">Product Development</span>, and <span className="text-cyan-300 font-mono text-sm">Entrepreneurship</span>.
                </p>
              </div>
            </div>

            {/* 4 Pillars Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-surface-subtle border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-card-rim"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      0{idx + 1}.
                    </span>
                    <h4 className="font-display font-semibold text-white text-sm">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Technical Commitments */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-surface-subtle via-surface-muted to-surface-subtle border border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Standards</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-cyan-400 block font-bold mb-1">ACCURATE TRUTH</span>
                  <span>Every project, repo, and role accurately stated without exaggeration.</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-blue-400 block font-bold mb-1">FOUNDER VISION</span>
                  <span>Leading FixBazaar as an early-stage hyperlocal initiative.</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-purple-400 block font-bold mb-1">RIGOROUS CRAFT</span>
                  <span>Combining AI theory with high-performance interactive interfaces.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
