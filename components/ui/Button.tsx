import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  external?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = false,
  external = false,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg group overflow-hidden tracking-wide disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-white text-black hover:bg-slate-200 shadow-lg shadow-white/10 active:scale-[0.98]',
    secondary:
      'bg-surface-elevated text-white hover:bg-surface-muted border border-border-subtle hover:border-cyan-500/40 shadow-card-rim active:scale-[0.98]',
    outline:
      'border border-white/20 text-white hover:border-white/50 hover:bg-white/5 active:scale-[0.98]',
    ghost:
      'text-slate-400 hover:text-white hover:bg-white/5 active:scale-[0.98]',
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 font-display">
        {children}
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current opacity-80" />
        )}
      </span>
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};
