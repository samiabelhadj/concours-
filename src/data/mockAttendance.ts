import type { AttendanceRecord } from '@/types';

export const mockAttendance: AttendanceRecord[] = [
  { id: '1', candidateId: 'c1', candidateCode: 'CAND-001', roomId: '1', present: true, markedAt: '2025-03-03T08:45:00Z' },
  { id: '2', candidateId: 'c2', candidateCode: 'CAND-002', roomId: '1', present: true, markedAt: '2025-03-03T08:46:00Z' },
  { id: '3', candidateId: 'c3', candidateCode: 'CAND-003', roomId: '1', present: false },
  { id: '4', candidateId: 'c4', candidateCode: 'CAND-004', roomId: '2', present: true, markedAt: '2025-03-03T08:44:00Z' },
];
