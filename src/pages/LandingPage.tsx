import { ArrowRight, BarChart3, Brain, CheckCircle2, UsersRound } from 'lucide-react';
import { Button } from '../components/Button';
import { roles } from '../data/roles';
import type { Page } from '../lib/navigation';

export function LandingPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm"><Brain size={18} /> AI-native learning universe</p>
          <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">Personalized education for every role in the school community.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">EduVerse AI is a modern, accessible platform concept for OpenAI Build Week 2026—connecting instruction, support, analytics, and family engagement with trustworthy AI.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => navigate('roles')}>Choose your role <ArrowRight className="ml-2" size={18} /></Button>
            <Button variant="secondary" onClick={() => navigate('login')}>Log in</Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Accessible by design', 'Mobile-first flows', 'Reusable components'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="text-emerald-500" size={18} /> {item}</span>
            ))}
          </div>
        </div>
        <div className="glass animate-fade-up relative rounded-[2.5rem] p-5 sm:p-8">
          <div className="absolute -left-3 top-12 size-8 rounded-full bg-mint animate-pulse-ring" aria-hidden="true" />
          <div className="animate-float rounded-[2rem] bg-gradient-to-br from-ink to-blue-700 p-6 text-white shadow-2xl shadow-blue-900/30">
            <div className="flex items-center justify-between"><span className="text-sm font-bold text-blue-100">Learning Command Center</span><BarChart3 /></div>
            <div className="mt-8 grid gap-4">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <div key={role.title} className="rounded-3xl bg-white/12 p-4 backdrop-blur">
                    <div className="flex items-center gap-3"><span className={`grid size-10 place-items-center rounded-2xl bg-gradient-to-br ${role.accent}`}><Icon size={20} /></span><strong>{role.title}</strong></div>
                    <div className="mt-3 h-2 rounded-full bg-white/15"><div className={`h-2 rounded-full bg-gradient-to-r ${role.accent}`} style={{ width: role.title === 'Student' ? '88%' : role.title === 'Teacher' ? '76%' : role.title === 'Parent' ? '64%' : '82%' }} /></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          ['Adaptive pathways', 'AI recommends next steps using goals, strengths, and classroom context.'],
          ['Human-centered insights', 'Role-aware dashboards keep educators and families aligned without overwhelm.'],
          ['Safe implementation', 'Designed for clear governance, transparency, and school-ready workflows.'],
        ].map(([title, body]) => (
          <article key={title} className="glass rounded-3xl p-6 transition duration-300 hover:-translate-y-1">
            <UsersRound className="mb-5 text-blue-600" aria-hidden="true" />
            <h2 className="text-xl font-black text-ink">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
