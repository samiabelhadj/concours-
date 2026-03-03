import type { User } from '@/types';

export const mockUsers: User[] = [
  { id: '1', email: 'admin@concours.doctor', name: 'Admin Principal', role: 'admin' },
  { id: '2', email: 'prof.martin@univ.fr', name: 'Prof. Martin', role: 'professor' },
  { id: '3', email: 'prof.dupont@univ.fr', name: 'Prof. Dupont', role: 'professor' },
  { id: '4', email: 'correcteur@univ.fr', name: 'Marie Correcteur', role: 'corrector' },
  { id: '5', email: 'superviseur@univ.fr', name: 'Jean Superviseur', role: 'supervisor' },
  { id: '6', email: 'jury@univ.fr', name: 'Jury Président', role: 'jury' },
];
