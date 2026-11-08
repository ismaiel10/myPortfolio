'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projectsData } from '@/data/projects';
import { Project } from '@/types';
import { ShieldCheck, GitFork } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            number="02"
            badge="PORTFOLIO INITIATIVES"
            title="Selected Software & Engineering Systems"
            subtitle="Four distinct technical projects spanning founder-led marketplace architecture, civic grievance automation, clinical diagnostics, and atmospheric 3D game mechanics."
            badgeVariant="blue"
            className="mb-0"
          />

          <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-subtle border border-white/10 text-xs font-mono text-slate-400 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict Truth: No Fabricated Metrics</span>
          </div>
        </div>

        {/* Projects Grid: 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
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
