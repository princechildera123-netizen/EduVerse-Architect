import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
};

const variants = {
  primary: 'bg-ink text-white shadow-xl shadow-blue-900/20 hover:-translate-y-0.5 hover:bg-slate-900',
  secondary: 'bg-white text-ink shadow-lg shadow-blue-900/10 hover:-translate-y-0.5 hover:bg-blue-50',
  ghost: 'bg-transparent text-ink hover:bg-white/70',
};

export function Button({ children, className = '', variant = 'primary', fullWidth, ...props }: ButtonProps) {
  return (
    <button
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
