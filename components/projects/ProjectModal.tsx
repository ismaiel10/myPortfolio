'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types';
import { X, Github, ExternalLink, ShieldAlert, CheckCircle, Layers, Server, Database, Wrench, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-surface-subtle border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-surface relative">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-cyan-400 font-bold">
                PROJECT {project.number}
              </span>
              <Badge variant="cyan" size="sm">
                {project.badge}
              </Badge>
              <span className="font-mono text-xs text-slate-400">
                ROLE: {project.role}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-300/80 font-mono">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300">
          
          {/* Status Integrity Banner */}
          <div className="p-4 rounded-xl bg-surface-muted/90 border border-white/10 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs font-mono space-y-1">
              <span className="text-white font-semibold block uppercase">
                Status Transparency: {project.status}
              </span>
              <p className="text-slate-400 font-sans text-xs">
                Presented strictly according to actual engineering progress. No synthetic metrics, hypothetical revenue, or fabricated links.
              </p>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2">
              // ARCHITECTURAL OVERVIEW
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-light">
              {project.fullOverview}
            </p>
          </div>

          {/* FixBazaar Specific: Service Categories */}
          {project.serviceCategories && (
            <div>
              <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-3">
                // PLANNED VERTICAL CATALOGS (MYSURU, KARNATAKA)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {project.serviceCategories.map((service, idx) => (
                  <div
                    key={service}
                    className="p-3 rounded-lg bg-surface border border-white/5 flex items-center gap-2"
                  >
                    <span className="text-cyan-400 font-bold">0{idx + 1}.</span>
                    <span className="text-slate-200">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Architecture Breakdown */}
          <div>
            <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-3">
              // SYSTEM STACK & SPECIFICATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecture.frontend && (
                <div className="p-4 rounded-xl bg-surface border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase font-semibold">
                    <Layers className="w-4 h-4" /> Client Layer
                  </div>
                  <ul className="text-xs space-y-1 font-mono text-slate-300">
                    {project.architecture.frontend.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture.backend && (
                <div className="p-4 rounded-xl bg-surface border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-blue-400 uppercase font-semibold">
                    <Server className="w-4 h-4" /> Service / API Layer
                  </div>
                  <ul className="text-xs space-y-1 font-mono text-slate-300">
                    {project.architecture.backend.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture.database && (
                <div className="p-4 rounded-xl bg-surface border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase font-semibold">
                    <Database className="w-4 h-4" /> Database & Storage
                  </div>
                  <ul className="text-xs space-y-1 font-mono text-slate-300">
                    {project.architecture.database.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture.engine && (
                <div className="p-4 rounded-xl bg-surface border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-purple-400 uppercase font-semibold">
                    <Wrench className="w-4 h-4" /> Engine & Runtime
                  </div>
                  <ul className="text-xs space-y-1 font-mono text-slate-300">
                    {project.architecture.engine.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-3">
              // KEY ARCHITECTURAL ATTRIBUTES
            </h4>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-surface border border-white/5"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-surface flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors border border-white/20"
              >
                <Github className="w-4 h-4" />
                View Repository
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-surface-elevated hover:bg-surface-muted text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/10"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
