'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const backdropShapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(textRef.current?.children || [], {
        opacity: 0.3,
        y: 20,
        duration: 0.8,
        stagger: 0.08,
      })
        .from(
          portraitRef.current,
          {
            opacity: 0.6,
            y: 20,
            scale: 0.98,
            duration: 0.9,
          },
          '-=0.6'
        );

      // Scroll-linked Subtle Parallax
      gsap.to(portraitRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
        yPercent: 14,
        scale: 1.02,
      });

      gsap.to(backdropShapeRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
        yPercent: 8,
      });

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent: -15,
        opacity: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-8 lg:px-12 bg-background overflow-hidden border-b border-black/[0.06]"
    >
      {/* Top Editorial Index Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-6 border-b border-black/[0.08] text-stone text-[11px] font-mono tracking-widest uppercase">
        <div className="flex items-center gap-3">
          <span className="text-charcoal font-semibold">ISSUE 01</span>
          <span>/</span>
          <span>ENGINEERING & PRODUCT ARCHIVE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>12.3118° N, 76.6529° E</span>
          <span>•</span>
          <span>MYSURU, KARNATAKA</span>
        </div>
      </div>

      {/* Main Asymmetrical Stage */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Monumental Editorial Typography */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-olive" />
              <span className="font-mono text-xs text-accent-olive uppercase tracking-[0.2em] font-medium">
                Engineer / Product Builder / Founder
              </span>
            </div>

            {/* Monumental Name in Editorial Display Typography */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-tight text-charcoal leading-[0.92] mb-8">
              Syed <br />
              <span className="italic font-light text-charcoal/90">Ismaiel</span>
            </h1>

            {/* Confident Manifesto Introduction */}
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-charcoal-muted font-normal leading-snug max-w-xl mb-8">
              “I build products, engineer systems and explore ideas at the intersection of technology and creativity.”
            </p>

            {/* Concise Bio & Context Note */}
            <p className="text-sm sm:text-base text-stone font-light leading-relaxed max-w-lg mb-10">
              Pursuing Artificial Intelligence & Machine Learning at Vidyavardhaka College of Engineering, Mysuru. Currently founding FixBazaar and architecting applied computer vision systems.
            </p>

            {/* Actions & Discovery Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <Link
                href="#work"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-charcoal text-white hover:bg-black transition-colors text-xs font-mono uppercase tracking-widest group"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-charcoal hover:text-stone transition-colors py-3 group"
              >
                <span>Read Philosophy</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Art-Directed Editorial Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            {/* Architectural Tone Plinth (Grounded background shape, warm stone) */}
            <div
              ref={backdropShapeRef}
              className="absolute w-[280px] sm:w-[360px] lg:w-[420px] h-[380px] sm:h-[480px] lg:h-[560px] bg-[#EFECE6] rounded-t-[140px] rounded-b-3xl border border-black/[0.04] bottom-0 right-0 sm:right-6 lg:right-0 z-0 shadow-subtle"
            />

            {/* Portrait Cutout (High-resolution, natural, extending beyond shape) */}
            <div
              ref={portraitRef}
              className="relative z-10 w-[300px] sm:w-[380px] lg:w-[440px] aspect-[3/4] flex items-end drop-shadow-[0_20px_35px_rgba(20,20,19,0.12)]"
              style={{ position: 'relative', width: '100%', maxWidth: '440px', aspectRatio: '3/4' }}
            >
              <Image
                src="/images/syed-cutout.png"
                alt="Syed Ismaiel — Founder & Engineer"
                fill
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 440px"
                className="object-contain object-bottom select-none pointer-events-none"
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              />
            </div>

            {/* Subtle Editorial Captioned Tag */}
            <div className="absolute -bottom-4 left-4 sm:left-12 lg:left-4 z-20 px-4 py-2 rounded-xl bg-paper/95 border border-black/[0.08] backdrop-blur-md shadow-subtle flex flex-col">
              <span className="font-mono text-[9px] text-stone uppercase tracking-widest">
                Portrayed
              </span>
              <span className="font-serif text-xs font-medium text-charcoal">
                Syed Ismaiel, 2026
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-stone">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-olive" />
          <span>Independent Software Architecture & Product Ventures</span>
        </div>

        <Link
          href="#work"
          className="flex items-center gap-2 text-charcoal hover:text-stone transition-colors group"
        >
          <span className="tracking-widest uppercase text-[11px]">Scroll down to enter archive</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
};
