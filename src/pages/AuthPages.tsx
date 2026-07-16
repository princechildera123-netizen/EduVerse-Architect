import { AuthCard } from '../components/AuthCard';
import type { Page } from '../lib/navigation';

export function LoginPage({ navigate }: { navigate: (page: Page) => void }) {
  return <AuthCard title="Log in" subtitle="Continue to your EduVerse AI workspace." cta="Log in securely" onSubmit={() => navigate('roles')} footer={<button className="focus-ring rounded-lg text-blue-700 underline-offset-4 hover:underline" onClick={() => navigate('signup')} type="button">Need an account? Sign up</button>} />;
}

export function SignUpPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <AuthCard title="Create account" subtitle="Start with secure access, then choose your role." cta="Create account" onSubmit={() => navigate('roles')} footer={<button className="focus-ring rounded-lg text-blue-700 underline-offset-4 hover:underline" onClick={() => navigate('login')} type="button">Already have an account? Log in</button>}>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-slate-700">Full name</span>
        <input className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink shadow-sm" type="text" placeholder="Alex Morgan" autoComplete="name" required />
      </label>
    </AuthCard>
  );
}
