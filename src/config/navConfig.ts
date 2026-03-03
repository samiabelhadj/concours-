import type { Role } from '@/types';

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  roles: Role[];
}

export const navConfig: NavItem[] = [
  { label: 'Tableau de bord', path: '/', icon: 'dashboard', roles: ['admin', 'professor', 'corrector', 'supervisor', 'jury'] },
  { label: 'Utilisateurs', path: '/admin/users', icon: 'users', roles: ['admin'] },
  { label: 'Phases', path: '/admin/phases', icon: 'phases', roles: ['admin'] },
  { label: 'Professeurs', path: '/admin/professors', icon: 'professors', roles: ['admin'] },
  { label: 'Exercices', path: '/admin/exercises', icon: 'exercises', roles: ['admin'] },
  { label: 'Générateur sujets', path: '/admin/subjects', icon: 'subjects', roles: ['admin'] },
  { label: 'Salles', path: '/admin/rooms', icon: 'rooms', roles: ['admin'] },
  { label: 'Journaux', path: '/admin/logs', icon: 'logs', roles: ['admin'] },
  { label: 'Mes exercices', path: '/professor/exercises', icon: 'exercises', roles: ['professor'] },
  { label: 'Copies anonymes', path: '/corrector/copies', icon: 'copies', roles: ['corrector'] },
  { label: 'Présences', path: '/supervisor/attendance', icon: 'attendance', roles: ['supervisor'] },
  { label: 'Classement', path: '/jury/ranking', icon: 'ranking', roles: ['jury'] },
  { label: 'Validation finale', path: '/jury/validation', icon: 'validation', roles: ['jury'] },
];
