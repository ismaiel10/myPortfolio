import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  number?: string;
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  badgeVariant?: 'cyan' | 'blue' | 'indigo' | 'emerald' | 'amber' | 'slate' | 'rose';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  subtitle,
  align = 'left',
  badgeVariant = 'cyan',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`relative mb-12 sm:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {/* Subtle radial ambient bloom behind heading */}
      <div
        className={`absolute -top-10 ${
          isCenter ? 'left-1/2 -translate-x-1/2' : '-left-8'
        } w-64 h-32 bg-cyan-500/10 blur-[80px] pointer-events-none rounded-full`}
      />

      {/* Top Meta Line: Number + Pill Badge */}
      <div
        className={`flex items-center gap-3 mb-4 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        {number && (
          <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
            [{number}]
          </span>
        )}
        <Badge variant={badgeVariant} pulse>
          {badge}
        </Badge>
      </div>

      {/* Display Title */}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {/* Editorial Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
