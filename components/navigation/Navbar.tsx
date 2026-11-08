'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Selected Work', href: '#work' },
    { label: 'The Playground', href: '#experiments' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F8F7F4]/90 backdrop-blur-md border-b border-black/[0.06] py-4'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Identity / Monogram */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-charcoal">
                Syed Ismaiel
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-accent-olive/70" />
              <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-stone uppercase">
                Studio Edition
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-mono uppercase tracking-[0.16em] text-stone hover:text-charcoal transition-colors relative py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Availability Status / Action */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-[11px] font-mono text-stone pl-4 border-l border-black/[0.08]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-olive animate-pulse" />
                <span>Available for Select Ventures</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-charcoal hover:text-stone transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F8F7F4] flex flex-col justify-between p-8 pt-28 md:hidden">
          <div className="space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-stone">
              Navigation Index
            </span>
            <div className="flex flex-col space-y-5">
              {navLinks.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl font-medium text-charcoal hover:text-stone transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-stone">0{idx + 1}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-black/[0.08] space-y-3 font-mono text-xs text-stone">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-olive" />
              <span>Mysuru, Karnataka, India</span>
            </div>
            <p className="text-[11px] text-stone/80">
              Engineer / Product Builder / Founder
            </p>
          </div>
        </div>
      )}
    </>
  );
};
