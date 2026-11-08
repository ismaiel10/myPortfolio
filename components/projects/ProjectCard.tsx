'use client';

import React from 'react';
import { Project } from '@/types';
import { ArrowUpRight, Github, Code2, Layers, Cpu, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-surface-subtle border border-white/10 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden shadow-card-rim hover:shadow-glow-cyan hover:-translate-y-1.5">
      
      {/* Top Ambient Glow on Hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card Content Area */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Top Header Row: Number + Role Badge + Status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold text-white/30 group-hover:text-cyan-400 transition-colors">
              {project.number}
            </span>
            <span className="text-white/20 font-mono text-sm">/</span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              {project.badge}
            </span>
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

        {/* Title & Tagline */}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-cyan-400/90 tracking-wide">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 font-light leading-relaxed">
          {project.description}
        </p>

        {/* Role & Core Focus */}
        <div className="p-3.5 rounded-xl bg-surface border border-white/5 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">ASSIGNED ROLE:</span>
          <span className="text-white font-semibold">{project.role}</span>
        </div>

        {/* Technology Pills */}
        <div className="space-y-2">
          <div className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
            TECH STACK MATRIX
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-300 group-hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-8 pt-4 border-t border-white/5 bg-surface/80 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors"
        >
          <span>Deep-Dive Architecture</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400" />
        </button>

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} GitHub repository`}
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
