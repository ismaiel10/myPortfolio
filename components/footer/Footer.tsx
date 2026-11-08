'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: '01 / About', href: '#about' },
    { label: '02 / Selected Work', href: '#work' },
    { label: '03 / Engineering Lab', href: '#lab' },
    { label: '04 / Capabilities', href: '#capabilities' },
    { label: '05 / Journey', href: '#journey' },
    { label: '06 / Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050608] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Top Tier: Monogram + Large Statement + Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/5">
          <div className="space-y-2">
            <span className="font-display font-bold text-2xl text-white tracking-wider flex items-center gap-1">
              SYED ISMAIEL<span className="text-cyan-400">°</span>
            </span>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              Engineer · Product Builder · Founder
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ismaiel10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-ismaiel-616645330"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Quick Nav + Architectural Index */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono">
          <div className="space-y-3">
            <span className="text-white uppercase tracking-wider font-semibold block">
              PORTFOLIO INDEX
            </span>
            <ul className="space-y-2 text-slate-400">
              {navLinks.slice(0, 3).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-cyan-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-white uppercase tracking-wider font-semibold block">
              SYSTEM SECTIONS
            </span>
            <ul className="space-y-2 text-slate-400">
              {navLinks.slice(3).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-cyan-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-white uppercase tracking-wider font-semibold block">
              LOCATION & CITATION
            </span>
            <p className="text-slate-400 leading-relaxed font-sans">
              Designed and engineered from scratch as an original digital experience reflecting engineering rigor, 3D visualization, and founder ambition.
            </p>
            <p className="text-[11px] text-cyan-400/80 font-mono">
              Mysuru, Karnataka, India · 12.3118° N, 76.6529° E
            </p>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Syed Ismaiel. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Built with Next.js, TypeScript & Three.js</span>
            <span>•</span>
            <span className="text-slate-400">Public Production Release</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
