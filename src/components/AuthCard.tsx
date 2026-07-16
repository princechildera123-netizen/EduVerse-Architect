import type { ReactNode } from 'react';
import { Button } from './Button';

type AuthCardProps = {
  title: string;
  subtitle: string;
  cta: string;
  footer: ReactNode;
  onSubmit: () => void;
  children?: ReactNode;
};

export function AuthCard({ title, subtitle, cta, footer, onSubmit, children }: AuthCardProps) {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-70px)] w-full max-w-6xl items-center px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:px-8">
      <div className="animate-fade-up mb-8 lg:mb-0">
        <p className="mb-4 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">Secure AI learning workspace</p>
        <h1 className="max-w-xl text-4xl font-black tracking-tight text-ink sm:text-5xl">Welcome to the future of personalized education.</h1>
        <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">EduVerse AI brings students, teachers, families, and administrators into one thoughtful learning ecosystem.</p>
      </div>
      <form
        className="glass animate-fade-up rounded-[2rem] p-6 sm:p-8"
        aria-label={title}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <h2 className="text-3xl font-black text-ink">{title}</h2>
        <p className="mt-2 text-slate-600">{subtitle}</p>
        <div className="mt-8 space-y-4">
          {children}
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Email address</span>
            <input className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink shadow-sm" type="email" placeholder="you@school.edu" autoComplete="email" required />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Password</span>
            <input className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink shadow-sm" type="password" placeholder="••••••••" autoComplete="current-password" required />
          </label>
        </div>
        <Button fullWidth className="mt-6" type="submit">{cta}</Button>
        <div className="mt-5 text-center text-sm font-semibold text-slate-600">{footer}</div>
      </form>
    </section>
  );
}
