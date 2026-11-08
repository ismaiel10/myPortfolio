'use client';

import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { projectsData } from '@/data/projects';
import { Project } from '@/types';
import { ArrowUpRight, Github, Layers, ShieldCheck, Sparkles, Cpu, Activity, Gamepad2, ArrowRight } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fixBazaar = projectsData.find((p) => p.id === 'fixbazaar') || projectsData[0];
  const forgent = projectsData.find((p) => p.id === 'forgent') || projectsData[1];
  const udc = projectsData.find((p) => p.id === 'udc') || projectsData[2];
  const theLastBell = projectsData.find((p) => p.id === 'the-last-bell') || projectsData[3];

  return (
    <section id="work" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-36">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-black/[0.08] gap-6 text-stone text-xs font-mono tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="text-charcoal font-semibold">(02)</span>
            <span>/</span>
            <span>SELECTED ARCHITECTURE & VENTURES</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-olive" />
            <span>Four Verified Initiatives · Distinct Asymmetric Formats</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 01: FIXBAZAAR (Heroic Widescreen Editorial Spread) */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-4">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm sm:text-base font-semibold text-accent-olive">
                NO. 01
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
                FixBazaar
              </h3>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-stone hidden sm:inline">
              Founder Venture · Mysuru
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Visual Canvas: Minimalist Editorial App Architecture Canvas */}
            <div className="lg:col-span-7 bg-[#EFECE6] rounded-2xl p-8 sm:p-10 border border-black/[0.06] flex flex-col justify-between min-h-[380px] sm:min-h-[440px] shadow-subtle relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-stone">
                  Hyperlocal Marketplace
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-paper border border-black/[0.08] text-charcoal">
                  In Active Development
                </span>
              </div>

              {/* Graphic Blueprint of the 8 Service Categories */}
              <div className="my-auto py-6">
                <div className="font-serif text-2xl sm:text-3xl text-charcoal max-w-md font-normal leading-snug mb-6">
                  “Connecting households with verified professionals across Mysuru through real-time state synchronization.”
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-stone">
                  {fixBazaar.serviceCategories?.slice(0, 8).map((cat) => (
                    <div key={cat} className="p-2.5 rounded-lg bg-paper/70 border border-black/[0.04] text-charcoal/90 truncate">
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-stone pt-4 border-t border-black/[0.06]">
                <span>Role: Founder & CEO</span>
                <span>PostgreSQL RLS · Geospatial Dispatch</span>
              </div>
            </div>

            {/* Narrative & Specifications */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-charcoal font-light leading-relaxed">
                  {fixBazaar.description}
                </p>
                <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                  As Founder & CEO, Syed Ismaiel architects the core dispatch engine, mobile application, and data privacy isolation. The platform eliminates urban middleman markups while establishing transparent service standards.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/[0.06]">
                <div className="text-xs font-mono uppercase tracking-widest text-stone">
                  Verified Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {fixBazaar.technologies.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-md bg-surface border border-black/[0.06] text-charcoal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <button
                  onClick={() => setSelectedProject(fixBazaar)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal text-white hover:bg-black transition-colors text-xs font-mono uppercase tracking-wider group cursor-pointer"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>

                {fixBazaar.repoUrl && (
                  <a
                    href={fixBazaar.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-paper border border-black/[0.08] hover:border-black/20 text-xs font-mono text-charcoal transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 02: FORGENT (Asymmetric Inspection Layout) */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-8">
          <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-4">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm sm:text-base font-semibold text-accent-olive">
                NO. 02
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
                Forgent
              </h3>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-stone hidden sm:inline">
              Industrial AI & Vision Platform
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Narrative First (Asymmetric Inversion) */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-charcoal font-light leading-relaxed">
                  {forgent.description}
                </p>
                <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                  Bridges modern computer vision with physical manufacturing. Combines real-time micro-defect segmentation on fabricated parts with localized multimodal document retrieval (RAG) across industrial maintenance manuals.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/[0.06]">
                <div className="text-xs font-mono uppercase tracking-widest text-stone">
                  Verified Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {forgent.technologies.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-md bg-surface border border-black/[0.06] text-charcoal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <button
                  onClick={() => setSelectedProject(forgent)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal text-white hover:bg-black transition-colors text-xs font-mono uppercase tracking-wider group cursor-pointer"
                >
                  <span>Inspection Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Visual Canvas: Technical Optical Inspection Frame */}
            <div className="lg:col-span-7 order-1 lg:order-2 bg-[#EAE7E0] rounded-2xl p-8 sm:p-10 border border-black/[0.06] flex flex-col justify-between min-h-[380px] sm:min-h-[440px] shadow-subtle relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-stone">
                  Zero-Shot Segmentation & RAG
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-paper border border-black/[0.08] text-accent-olive font-medium">
                  Role: AI / Vision Lead
                </span>
              </div>

              <div className="my-auto py-6 space-y-4">
                <div className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-snug">
                  “Autonomous visual tolerance verification paired with contextual equipment manual telemetry.”
                </div>
                <div className="space-y-2 font-mono text-xs text-charcoal-muted">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-paper border border-black/[0.04]">
                    <span>Segmentation Model</span>
                    <span className="text-charcoal font-semibold">FastSAM / Segment Anything</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-paper border border-black/[0.04]">
                    <span>Manual Document Retrieval</span>
                    <span className="text-charcoal font-semibold">LangChain + ChromaDB Vector Store</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-stone pt-4 border-t border-black/[0.06]">
                <span>Inspection Audit Trail</span>
                <span>Deterministic Verification</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 03: UNIQUE DIAGNOSTIC CENTRE (Clinical Workflow Layout) */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-8">
          <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-4">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm sm:text-base font-semibold text-accent-olive">
                NO. 03
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
                Unique Diagnostic Centre
              </h3>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-stone hidden sm:inline">
              Clinical Laboratory Platform
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 bg-[#F2EFE9] rounded-2xl p-8 sm:p-10 border border-black/[0.06] flex flex-col justify-between min-h-[380px] shadow-subtle">
              <div className="flex items-center justify-between text-xs font-mono text-stone">
                <span>Healthcare Systems Architecture</span>
                <span className="text-[11px] px-3 py-1 rounded-full bg-paper border border-black/[0.08] text-charcoal">
                  Full-Stack Development
                </span>
              </div>

              <div className="my-auto py-6 space-y-3">
                <div className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-snug">
                  “Replacing legacy paper reports with a unified digital laboratory lifecycle.”
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono pt-3">
                  <div className="p-3 rounded-lg bg-paper border border-black/[0.04]">
                    <div className="text-stone text-[10px] uppercase">01 / Intake</div>
                    <div className="font-medium text-charcoal mt-1">Patient Appointment & Billing</div>
                  </div>
                  <div className="p-3 rounded-lg bg-paper border border-black/[0.04]">
                    <div className="text-stone text-[10px] uppercase">02 / Pathology</div>
                    <div className="font-medium text-charcoal mt-1">Report Cryptographic Signing</div>
                  </div>
                  <div className="p-3 rounded-lg bg-paper border border-black/[0.04]">
                    <div className="text-stone text-[10px] uppercase">03 / Security</div>
                    <div className="font-medium text-charcoal mt-1">Row-Level Data Encryption</div>
                  </div>
                  <div className="p-3 rounded-lg bg-paper border border-black/[0.04]">
                    <div className="text-stone text-[10px] uppercase">04 / Delivery</div>
                    <div className="font-medium text-charcoal mt-1">Automated Patient Portal</div>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-stone pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <span>Next.js 14 App Router</span>
                <span>Supabase PostgreSQL</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-charcoal font-light leading-relaxed">
                  {udc.description}
                </p>
                <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                  Engineered end-to-end laboratory record software with HIPAA-aligned zero-trust security and automated PDF report distribution.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/[0.06]">
                <div className="text-xs font-mono uppercase tracking-widest text-stone">
                  Verified Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {udc.technologies.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-md bg-surface border border-black/[0.06] text-charcoal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setSelectedProject(udc)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal text-white hover:bg-black transition-colors text-xs font-mono uppercase tracking-wider group cursor-pointer"
                >
                  <span>View Clinical Workflow</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 04: THE LAST BELL (Atmospheric Game Canvas) */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-8">
          <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-4">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm sm:text-base font-semibold text-accent-olive">
                NO. 04
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
                The Last Bell
              </h3>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-stone hidden sm:inline">
              Solo Game Development & Physics
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 bg-[#232322] text-white rounded-2xl p-8 sm:p-10 border border-black/[0.1] flex flex-col justify-between min-h-[380px] shadow-editorial">
              <div className="flex items-center justify-between text-xs font-mono text-stone-light">
                <span>Interactive Physical Narrative</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[11px]">
                  Unity 6.3 LTS
                </span>
              </div>

              <div className="my-auto py-6 space-y-4">
                <div className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  “Atmospheric survival FPS exploring psychological narrative, volumetric lighting, and physical level design.”
                </div>
                <p className="text-xs sm:text-sm text-stone-light font-light leading-relaxed max-w-lg">
                  Solo developed from scratch. Features custom Universal Render Pipeline (URP) shaders, deterministic PhysX interaction, and spatial sound attenuation.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-stone-light pt-4 border-t border-white/10">
                <span>Role: Solo Game Developer & Designer</span>
                <span>Universal Render Pipeline (URP)</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-charcoal font-light leading-relaxed">
                  {theLastBell.description}
                </p>
                <p className="text-xs sm:text-sm text-stone font-light leading-relaxed">
                  Serves as a research testbed for game physics, shader programming, and interactive storytelling.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/[0.06]">
                <div className="text-xs font-mono uppercase tracking-widest text-stone">
                  Verified Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {theLastBell.technologies.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-md bg-surface border border-black/[0.06] text-charcoal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setSelectedProject(theLastBell)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal text-white hover:bg-black transition-colors text-xs font-mono uppercase tracking-wider group cursor-pointer"
                >
                  <span>Explore Mechanics</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
