import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'indigo' | 'emerald' | 'amber' | 'slate' | 'rose';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  pulse = false,
  className = '',
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    slate: 'bg-white/5 text-slate-300 border-white/10',
    rose: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
  };

  const dotStyles = {
    cyan: 'bg-cyan-400',
    blue: 'bg-blue-400',
    indigo: 'bg-indigo-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    slate: 'bg-slate-400',
    rose: 'bg-rose-400',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-1 tracking-wider',
    md: 'text-xs px-3 py-1.5 tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono uppercase font-medium backdrop-blur-md ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotStyles[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotStyles[variant]}`}
          />
        </span>
      )}
      {children}
    </span>
  );
};
