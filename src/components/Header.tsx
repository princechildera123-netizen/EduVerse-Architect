import { Sparkles } from 'lucide-react';
import { Button } from './Button';
import type { Page } from '../lib/navigation';

type HeaderProps = {
  activePage: Page;
  navigate: (page: Page) => void;
};

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'landing' },
  { label: 'Roles', page: 'roles' },
  { label: 'Log in', page: 'login' },
];

export function Header({ activePage, navigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <button className="focus-ring flex items-center gap-3 rounded-2xl" onClick={() => navigate('landing')} aria-label="EduVerse AI home">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25">
            <Sparkles size={22} aria-hidden="true" />
          </span>
          <span className="text-left">
            <span className="block text-lg font-black tracking-tight text-ink">EduVerse AI</span>
            <span className="hidden text-xs font-semibold text-slate-500 sm:block">Build Week 2026</span>
          </span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${activePage === item.page ? 'bg-ink text-white' : 'text-slate-600 hover:bg-white hover:text-ink'}`}
              onClick={() => navigate(item.page)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <Button onClick={() => navigate('signup')} className="hidden sm:inline-flex">Get started</Button>
      </nav>
    </header>
  );
}
