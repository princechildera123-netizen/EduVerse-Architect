import { useState } from 'react';
import { Header } from './components/Header';
import { PageShell } from './components/PageShell';
import { LoginPage, SignUpPage } from './pages/AuthPages';
import { LandingPage } from './pages/LandingPage';
import { RoleSelectionPage } from './pages/RoleSelectionPage';
import type { Page } from './lib/navigation';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('landing');

  return (
    <>
      <Header activePage={activePage} navigate={setActivePage} />
      <PageShell>
        {activePage === 'landing' && <LandingPage navigate={setActivePage} />}
        {activePage === 'login' && <LoginPage navigate={setActivePage} />}
        {activePage === 'signup' && <SignUpPage navigate={setActivePage} />}
        {activePage === 'roles' && <RoleSelectionPage navigate={setActivePage} />}
      </PageShell>
    </>
  );
}
