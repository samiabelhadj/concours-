import type { Phase } from '@/types';

export const mockPhases: Phase[] = [
  { id: '1', name: 'Inscription', status: 'completed', order: 1 },
  { id: '2', name: 'Répartition sujets', status: 'completed', order: 2 },
  { id: '3', name: 'Épreuves écrites', status: 'active', order: 3 },
  { id: '4', name: 'Correction', status: 'pending', order: 4 },
  { id: '5', name: 'Délibération jury', status: 'pending', order: 5 },
];
