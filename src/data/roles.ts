import { BookOpen, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Role = {
  title: string;
  description: string;
  accent: string;
  icon: LucideIcon;
};

export const roles: Role[] = [
  {
    title: 'Student',
    description: 'Personal AI study paths, instant explanations, progress streaks, and confidence-building practice.',
    accent: 'from-blue-500 to-cyan-400',
    icon: GraduationCap,
  },
  {
    title: 'Teacher',
    description: 'Lesson co-planning, classroom insights, differentiated materials, and formative assessment support.',
    accent: 'from-violet-500 to-fuchsia-400',
    icon: BookOpen,
  },
  {
    title: 'Parent',
    description: 'Clear learning snapshots, family-friendly nudges, and meaningful ways to support growth at home.',
    accent: 'from-rose-500 to-orange-400',
    icon: HeartHandshake,
  },
  {
    title: 'School Administrator',
    description: 'AI governance, adoption dashboards, equitable intervention planning, and school-wide implementation tools.',
    accent: 'from-emerald-500 to-teal-400',
    icon: ShieldCheck,
  },
];
