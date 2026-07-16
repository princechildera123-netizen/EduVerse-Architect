export type Page = 'landing' | 'login' | 'signup' | 'roles';

export const pageLabels: Record<Page, string> = {
  landing: 'Home',
  login: 'Log in',
  signup: 'Sign up',
  roles: 'Choose role',
};
