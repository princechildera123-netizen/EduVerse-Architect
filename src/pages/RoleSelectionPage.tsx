import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { roles } from '../data/roles';
import type { Page } from '../lib/navigation';

export function RoleSelectionPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="animate-fade-up mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">Role-based onboarding</p>
        <h1 className="text-4xl font-black tracking-tight text-ink sm:text-6xl">Choose how you will use EduVerse AI.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">Each role receives a tailored experience with the right tools, language, and safeguards.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <article key={role.title} className="glass animate-fade-up group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2" style={{ animationDelay: `${index * 90}ms` }}>
              <span className={`grid size-14 place-items-center rounded-3xl bg-gradient-to-br ${role.accent} text-white shadow-lg`}><Icon size={26} aria-hidden="true" /></span>
              <h2 className="mt-6 text-2xl font-black text-ink">{role.title}</h2>
              <p className="mt-3 min-h-28 leading-7 text-slate-600">{role.description}</p>
              <Button fullWidth variant="secondary" className="mt-6 group-hover:bg-ink group-hover:text-white" onClick={() => navigate('signup')}>Continue <ArrowRight className="ml-2" size={17} /></Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
