'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', index: '01' },
    { label: 'Selected Work', href: '#work', index: '02' },
    { label: 'Visual Lab', href: '#lab', index: '03' },
    { label: 'Capabilities', href: '#capabilities', index: '04' },
    { label: 'Journey', href: '#journey', index: '05' },
    { label: 'Contact', href: '#contact', index: '06' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070709]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Identity / Monogram */}
            <Link
              href="/"
              className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            >
              <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-white text-sm group-hover:border-cyan-500/50 transition-colors">
                SI
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wider text-white uppercase flex items-center gap-1">
                  Syed Ismaiel<span className="text-cyan-400">°</span>
                </span>
                <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase hidden sm:inline">
                  Engineer & Product Builder
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 rounded-md text-xs font-mono tracking-wider text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
                >
                  <span className="text-cyan-400/70 text-[10px]">{item.index}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Right side: Status + Socials */}
            <div className="hidden sm:flex items-center gap-3">
              <Badge variant="cyan" pulse size="sm" className="hidden xl:inline-flex">
                Mysuru · KA
              </Badge>

              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <a
                  href="https://github.com/ismaiel10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-ismaiel-616645330"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="ml-1 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs font-medium tracking-wider uppercase transition-all"
                >
                  Connect
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-md bg-white/10 text-white font-mono text-xs uppercase"
              >
                Connect
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-md border border-white/10"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between border-b border-white/10">
          <div className="space-y-3">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
              Navigation Index
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 text-white font-display text-lg tracking-wide transition-all"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-cyan-400">/{item.index}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400">CONNECT CHANNELS</span>
              <Badge variant="cyan" pulse size="sm">Active</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/ismaiel10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-subtle border border-white/10 text-slate-200 text-xs font-mono uppercase"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/syed-ismaiel-616645330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-subtle border border-white/10 text-slate-200 text-xs font-mono uppercase"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
