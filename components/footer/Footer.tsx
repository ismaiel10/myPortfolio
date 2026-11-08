'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-background border-t border-black/[0.08] text-stone text-xs font-mono">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-black/[0.06]">
          <div className="space-y-3">
            <span className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
              Syed Ismaiel
            </span>
            <p className="font-mono text-xs text-stone uppercase tracking-widest">
              Engineer / Product Builder / Founder
            </p>
            <p className="text-xs text-stone/80 font-light max-w-md">
              BTech Artificial Intelligence & Machine Learning · Vidyavardhaka College of Engineering, Mysuru, Karnataka.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/ismaiel10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone hover:text-charcoal transition-colors uppercase tracking-wider text-[11px]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/syed-ismaiel-616645330"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone hover:text-charcoal transition-colors uppercase tracking-wider text-[11px]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sydismaiel10@gmail.com"
              className="text-stone hover:text-charcoal transition-colors uppercase tracking-wider text-[11px]"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface hover:bg-[#EAE7E0] text-charcoal uppercase tracking-wider text-[11px] transition-colors border border-black/[0.06] cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-stone/80">
          <div>
            © {new Date().getFullYear()} Syed Ismaiel. All rights reserved.
          </div>
          <div>
            Typeset in Playfair Display & Plus Jakarta Sans. Built with Next.js & GSAP.
          </div>
        </div>

      </div>
    </footer>
  );
};
