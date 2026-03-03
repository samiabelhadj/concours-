import type { Copy } from '@/types';

export const mockCopies: Copy[] = [
  { id: '1', code: 'COP-001', exerciseId: '1', status: 'corrected', score: 14 },
  { id: '2', code: 'COP-002', exerciseId: '1', status: 'in_progress' },
  { id: '3', code: 'COP-003', exerciseId: '1', status: 'pending' },
  { id: '4', code: 'COP-004', exerciseId: '1', status: 'pending' },
  { id: '5', code: 'COP-005', exerciseId: '3', status: 'corrected', score: 11 },
];
