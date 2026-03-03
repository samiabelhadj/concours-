import type { LogEntry } from '@/types';

export const mockLogs: LogEntry[] = [
  { id: '1', action: 'Connexion', user: 'admin@concours.doctor', timestamp: '2025-03-03T09:00:00Z', details: 'Connexion réussie' },
  { id: '2', action: 'Création utilisateur', user: 'admin@concours.doctor', timestamp: '2025-03-03T09:15:00Z', details: 'Nouveau correcteur ajouté' },
  { id: '3', action: 'Changement phase', user: 'admin@concours.doctor', timestamp: '2025-03-03T10:00:00Z', details: 'Phase: Épreuves écrites activée' },
  { id: '4', action: 'Upload exercice', user: 'prof.martin@univ.fr', timestamp: '2025-03-03T10:30:00Z', details: 'Algèbre linéaire v2' },
  { id: '5', action: 'Correction soumise', user: 'correcteur@univ.fr', timestamp: '2025-03-03T11:00:00Z', details: 'COP-001 noté 14/20' },
];
