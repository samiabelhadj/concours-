import type { Exercise } from '@/types';

export const mockExercises: Exercise[] = [
  { id: '1', title: 'Algèbre linéaire - Partie 1', subject: 'Mathématiques', professorId: '2', professorName: 'Prof. Martin', status: 'published', version: 2, createdAt: '2025-02-15' },
  { id: '2', title: 'Analyse - Suites et séries', subject: 'Mathématiques', professorId: '2', professorName: 'Prof. Martin', status: 'draft', version: 1, createdAt: '2025-02-20' },
  { id: '3', title: 'Mécanique quantique', subject: 'Physique', professorId: '3', professorName: 'Prof. Dupont', status: 'published', version: 3, createdAt: '2025-02-10' },
];
