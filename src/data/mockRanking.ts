import type { RankingEntry } from '@/types';

export const mockRanking: RankingEntry[] = [
  { code: 'COP-001', totalScore: 14, rank: 1, validated: true },
  { code: 'COP-005', totalScore: 11, rank: 2, validated: true },
  { code: 'COP-002', totalScore: 9, rank: 3, validated: false },
  { code: 'COP-003', totalScore: 7, rank: 4, validated: false },
];
