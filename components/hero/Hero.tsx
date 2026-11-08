'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github, Linkedin, Cpu, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Hero3DLoop } from './Hero3DLoop';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070709]">
      {/* Background Decorative Grid and Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Portrait with Editorial Rim Light & Framing */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] group">
              {/* Electric Rim Glow behind portrait */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Portrait Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-surface border border-white/15 shadow-2xl">
                {/* Official Portrait */}
                <div className="relative w-full aspect-[3/4] bg-neutral-900">
                  <Image
                    src="/images/black.png"
                    alt="Syed Ismaiel — Engineer, Product Builder & Founder"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  {/* Subtle gradient vignette at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />
                </div>

                {/* Overlaid Editorial HUD Info at Card Foot */}
                <div className="absolute bottom-0 inset-x-0 p-5 backdrop-blur-md bg-black/60 border-t border-white/10 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-white text-base tracking-wide">
                      Syed Ismaiel
                    </span>
                    <Badge variant="cyan" size="sm" pulse>
                      Verified Identity
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>BTech AI & ML · VVCE</span>
                    <span className="text-cyan-400">Mysuru, KA</span>
                  </div>
                </div>
              </div>

              {/* Secondary floating HUD telemetry card */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-xl bg-surface-muted/95 border border-cyan-500/30 shadow-glow-cyan backdrop-blur-lg hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 uppercase">Architecture Status</span>
                  <span className="font-display text-xs font-semibold text-white">Active Product Builder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Cinematic Typography, 3D Iridescence & CTAs */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center text-left">
            {/* Top Telemetry Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <Badge variant="cyan" pulse size="sm">
                PORTFOLIO EDITION · 2026
              </Badge>
              <span className="font-mono text-xs text-slate-400">
                12.3118° N, 76.6529° E
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="font-mono text-xs text-slate-400 hidden sm:inline">
                Mysuru, Karnataka, India
              </span>
            </div>

            {/* Oversized Brand Typography */}
            <div className="relative">
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white uppercase leading-[1.05]">
                Syed Ismaiel<span className="text-cyan-400">°</span>
              </h1>
              <div className="mt-2 font-mono text-xs sm:text-sm tracking-[0.2em] text-cyan-400 uppercase font-medium">
                Engineer / Product Builder / Founder
              </div>
            </div>

            {/* Headline & Philosophy */}
            <p className="mt-6 text-xl sm:text-2xl font-light text-slate-200 leading-snug">
              &ldquo;Building ideas into things that matter.&rdquo;
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl">
              I explore technology, engineer digital experiences, and turn ambitious ideas into products.
              Rooted in Artificial Intelligence & Machine Learning, I design and build systems at the intersection of engineering rigor, product architecture, and entrepreneurial vision.
            </p>

            {/* Interactive CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href="#work" variant="primary" size="md" icon>
                Explore Selected Work
              </Button>
              <Button href="#lab" variant="secondary" size="md">
                <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
                Engineering Visual Lab
              </Button>
              <Button href="#contact" variant="outline" size="md">
                Connect
              </Button>
            </div>

            {/* Social Proof & Verified Profiles */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Verified Channels:
                </span>
                <a
                  href="https://github.com/ismaiel10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>ismaiel10</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-ismaiel-616645330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>syed-ismaiel</span>
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for venture co-founding & product engineering</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
