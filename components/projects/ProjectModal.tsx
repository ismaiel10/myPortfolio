'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types';
import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

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
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-paper border border-black/[0.1] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="p-6 sm:p-8 border-b border-black/[0.08] flex items-start justify-between bg-surface relative">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-accent-olive font-semibold">
                PROJECT {project.number}
              </span>
              <span className="text-stone">/</span>
              <span className="text-stone uppercase tracking-wider">
                ROLE: {project.role}
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal">
              {project.title}
            </h3>
            <p className="text-sm text-stone font-mono">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-paper hover:bg-black/5 text-stone hover:text-charcoal transition-colors border border-black/[0.08]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-charcoal">
          
          {/* Status Banner */}
          <div className="p-4 rounded-xl bg-surface border border-black/[0.06] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-accent-olive shrink-0 mt-0.5" />
            <div className="text-xs font-mono space-y-1">
              <span className="text-charcoal font-semibold block uppercase">
                Status Transparency: {project.status}
              </span>
              <p className="text-stone font-sans text-xs">
                Verified systems architecture. Zero invented customer numbers, fabricated metrics, or synthetic claims.
              </p>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-stone block">
              Architectural Overview
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-charcoal font-light">
              {project.fullOverview}
            </p>
          </div>

          {/* Architecture Matrix Breakdown */}
          <div className="space-y-4 pt-4 border-t border-black/[0.06]">
            <span className="font-mono text-xs uppercase tracking-widest text-stone block">
              Subsystem Topology
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.architecture.frontend && (
                <div className="p-4 rounded-xl bg-surface border border-black/[0.06] space-y-2">
                  <div className="font-mono text-[10px] text-accent-olive uppercase tracking-wider">
                    Frontend Layer
                  </div>
                  <ul className="text-xs font-mono text-charcoal space-y-1">
                    {project.architecture.frontend.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture.backend && (
                <div className="p-4 rounded-xl bg-surface border border-black/[0.06] space-y-2">
                  <div className="font-mono text-[10px] text-accent-olive uppercase tracking-wider">
                    Backend & Compute
                  </div>
                  <ul className="text-xs font-mono text-charcoal space-y-1">
                    {project.architecture.backend.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture.database && (
                <div className="p-4 rounded-xl bg-surface border border-black/[0.06] space-y-2">
                  <div className="font-mono text-[10px] text-accent-olive uppercase tracking-wider">
                    Data & State
                  </div>
                  <ul className="text-xs font-mono text-charcoal space-y-1">
                    {project.architecture.database.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture.tooling && (
                <div className="p-4 rounded-xl bg-surface border border-black/[0.06] space-y-2">
                  <div className="font-mono text-[10px] text-accent-olive uppercase tracking-wider">
                    DevOps & Tooling
                  </div>
                  <ul className="text-xs font-mono text-charcoal space-y-1">
                    {project.architecture.tooling.map((t, i) => (
                      <li key={i}>• {t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3 pt-4 border-t border-black/[0.06]">
            <span className="font-mono text-xs uppercase tracking-widest text-stone block">
              Key Engineering Features
            </span>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-surface/60 border border-black/[0.04] text-xs sm:text-sm text-charcoal"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-olive shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-black/[0.08] bg-surface flex items-center justify-between">
          <span className="text-xs font-mono text-stone">
            Verified Architectural Specification
          </span>
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper border border-black/[0.08] hover:border-black/20 text-xs font-mono text-charcoal transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-charcoal text-white hover:bg-black transition-colors text-xs font-mono uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
