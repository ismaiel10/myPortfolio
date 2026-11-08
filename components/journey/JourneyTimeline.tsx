'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { journeyData } from '@/data/journey';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Milestone } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0b0e] border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="05"
          badge="VERIFIED TRAJECTORY"
          title="Education & Engineering Milestones"
          subtitle="Chronological record of academic progression at Vidyavardhaka College of Engineering and foundational software projects."
          badgeVariant="amber"
        />

        {/* Timeline Stream */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journeyData.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0a0b0e] border-2 border-amber-400/80 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-glow-cyan" />

              {/* Milestone Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-card-rim">
                
                {/* Top Row: Year + Tag Badge + Institution */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-sm font-bold text-white">
                      {item.year}
                    </span>
                    <span className="text-white/20 font-mono text-xs">/</span>
                    <Badge variant="amber" size="sm">
                      {item.period}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>

                {/* Institution / Role */}
                <p className="mt-1 font-mono text-xs text-amber-400/90 font-medium">
                  {item.institution}
                </p>

                {/* Narrative */}
                <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
