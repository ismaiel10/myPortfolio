'use client';

import React from 'react';
import { Project } from '@/types';
import { ArrowUpRight, Github, Code2, Layers, Cpu, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  // Generate short 2-letter monogram for top-left brand box (Slide 4 style)
  const monogram = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white/[0.025] hover:bg-white/[0.04] border border-white/10 hover:border-white/25 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-xl">
      
      {/* Top Hairline Ambient Glow on Hover */}
      <div
        className="absolute top-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      {/* Card Content Area */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Top Header Row (Slide 4 recreation: Brand Monogram Box + Details) */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* Monogram Box in Rounded Border */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-lg border shadow-inner transition-transform group-hover:scale-105"
              style={{
                backgroundColor: `${project.color}15`,
                borderColor: `${project.color}40`,
                color: project.color,
              }}
            >
              {monogram}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold" style={{ color: project.color }}>
                  {project.number}
                </span>
                <span className="text-white/20">/</span>
                <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                  {project.badge}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
            </div>
          </div>

          <Badge
            variant={
              project.statusType === 'founder'
                ? 'cyan'
                : project.statusType === 'development'
                ? 'blue'
                : 'indigo'
            }
            size="sm"
          >
            {project.status}
          </Badge>
        </div>

        {/* Tagline & Description */}
        <div>
          <p className="font-mono text-xs tracking-wide text-cyan-400/90 font-medium mb-2">
            {project.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Assigned Role Pill */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">ASSIGNED ROLE:</span>
          <span className="text-white font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
            {project.role}
          </span>
        </div>

        {/* Key Architectural Capabilities Preview */}
        {project.serviceCategories && (
          <div className="space-y-2">
            <div className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
              SYSTEM CAPABILITIES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {project.serviceCategories.slice(0, 4).map((cat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[11px] text-slate-300 bg-white/[0.02] p-2 rounded-lg border border-white/5"
                >
                  <div className="w-1 h-1 rounded-full bg-slate-500" />
                  <span className="truncate">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack Pills */}
        <div className="space-y-2">
          <div className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
            VERIFIED STACK
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 7).map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300 group-hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 7 && (
              <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-slate-400">
                +{project.technologies.length - 7} more
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-8 pt-4 border-t border-white/5 bg-black/30 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <span>Deep-Dive Architecture</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400" />
        </button>

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} repository`}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10 flex items-center gap-1.5 text-xs font-mono"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Repo</span>
          </a>
        )}
      </div>

    </div>
  );
};
