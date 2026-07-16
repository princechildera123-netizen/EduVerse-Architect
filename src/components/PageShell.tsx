import type { ReactNode } from 'react';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-[radial-gradient(circle_at_top_left,#dff7ff,transparent_34%),linear-gradient(135deg,#f8fbff_0%,#eef2ff_46%,#f0fdfa_100%)]">
      <div className="absolute left-[-5rem] top-24 size-64 rounded-full bg-blue-300/30 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[-4rem] top-48 size-72 rounded-full bg-violet-300/30 blur-3xl" aria-hidden="true" />
      {children}
    </main>
  );
}
