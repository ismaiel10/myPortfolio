'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, GraduationCap, MapPin, Compass, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      no: '01',
      title: 'Architectural Rigor',
      desc: 'Systems should be designed with deterministic schemas, row-level security constraints, and clear data pipelines rather than ad-hoc scripts.',
    },
    {
      no: '02',
      title: 'Founder Ownership',
      desc: 'Building FixBazaar taught me that code is only valuable when it solves acute operational friction for real customers and service professionals.',
    },
    {
      no: '03',
      title: 'Applied Intelligence',
      desc: 'Pursuing AIML at VVCE Mysuru, focusing on practical computer vision and localized document retrieval rather than hype.',
    },
    {
      no: '04',
      title: 'Creative Technology',
      desc: 'Using 3D physics engines, Unity, and procedural WebGL to communicate complex technical mechanics clearly.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-16 sm:mb-20 border-b border-black/[0.08] text-xs font-mono tracking-widest text-stone uppercase">
          <div className="flex items-center gap-3">
            <span className="text-charcoal font-semibold">(01)</span>
            <span>/</span>
            <span>BIOGRAPHY & APPROACH</span>
          </div>
          <span className="hidden sm:inline">ENGINEERING RIGOR · PRODUCT VISION</span>
        </div>

        {/* Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement & Biography */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Monumental Editorial Manifesto Statement */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15] tracking-tight">
              “Engineering is not merely writing code. It is understanding constraints, designing systems that endure, and turning abstract ideas into tangible reality.”
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-stone font-light leading-relaxed">
              <p>
                I am an engineer and product builder driven by curiosity across technology, business, and design. I do not see software engineering as an isolated technical exercise; I see it as the primary medium to build meaningful companies and solve real-world problems.
              </p>
              <p>
                Currently pursuing my BTech in Artificial Intelligence & Machine Learning at Vidyavardhaka College of Engineering (VVCE) in Mysuru, I combine formal academic foundations with rapid founder execution. As Founder & CEO of FixBazaar, I architect every layer from the customer mobile experience to geospatial technician dispatch algorithms.
              </p>
            </div>

            {/* Academic Credentials Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-black/[0.06] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone">
                <GraduationCap className="w-4 h-4 text-accent-olive" />
                <span>Academic Foundation</span>
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                  BTech in Artificial Intelligence & Machine Learning
                </h3>
                <p className="text-sm text-stone mt-1">
                  Vidyavardhaka College of Engineering (VVCE), Mysuru, Karnataka
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-stone border-t border-black/[0.06]">
                <span className="text-accent-olive font-medium">2023 — Present</span>
                <span>•</span>
                <span>Coordinates: 12.3118° N, 76.6529° E</span>
              </div>
            </div>

            {/* The 4 Architectural Pillars Grid */}
            <div className="pt-4">
              <span className="font-mono text-xs uppercase tracking-widest text-stone block mb-6">
                Principles of Execution
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((p) => (
                  <div key={p.no} className="space-y-2 pb-6 border-b border-black/[0.06]">
                    <div className="font-mono text-xs text-accent-olive font-semibold">
                      {p.no}
                    </div>
                    <h4 className="font-serif text-lg font-medium text-charcoal">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait & Provenance */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Editorial Portrait Container */}
            <div className="relative rounded-2xl overflow-hidden bg-surface border border-black/[0.08] shadow-editorial group p-6 sm:p-8 flex flex-col items-center">
              <div
                className="relative w-full max-w-[340px] aspect-[3/4] flex items-end drop-shadow-[0_15px_30px_rgba(20,20,19,0.1)]"
                style={{ position: 'relative', width: '100%', maxWidth: '340px', aspectRatio: '3/4' }}
              >
                <Image
                  src="/images/syed-cutout.png"
                  alt="Syed Ismaiel — Portrait Cutout"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-contain object-bottom select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
                  style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                />
              </div>

              {/* Editorial Caption Bar */}
              <div className="w-full mt-6 p-4 rounded-xl bg-paper border border-black/[0.06] space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-charcoal font-semibold uppercase tracking-wider">
                    Syed Ismaiel
                  </span>
                  <span className="text-accent-olive font-medium">Founder & Builder</span>
                </div>
                <p className="text-xs text-stone font-light leading-relaxed">
                  Tailored black-and-white editorial portrait. Focused on grounded engineering, truth in metrics, and impactful software delivery.
                </p>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-6 rounded-2xl bg-paper border border-black/[0.06] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-stone">
                Direct Profiles & Repositories
              </span>
              <div className="space-y-3">
                <a
                  href="https://github.com/ismaiel10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface hover:bg-[#EAE7E0] transition-colors text-xs font-mono text-charcoal group"
                >
                  <span>github.com/ismaiel10</span>
                  <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-charcoal transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/syed-ismaiel-616645330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface hover:bg-[#EAE7E0] transition-colors text-xs font-mono text-charcoal group"
                >
                  <span>linkedin.com/in/syed-ismaiel</span>
                  <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-charcoal transition-colors" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
