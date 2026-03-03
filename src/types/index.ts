export type Role = 'admin' | 'professor' | 'corrector' | 'supervisor' | 'jury';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  avatar?: string;
}

export interface Phase {
  id: string;
  name: string;
  status: 'pending' | 'active' | 'completed';
  order: number;
}

export interface Exercise {
  id: string;
  title: string;
  subject: string;
  professorId: string;
  professorName: string;
  status: 'draft' | 'published' | 'archived';
  version: number;
  createdAt: string;
}

export interface Copy {
  id: string;
  code: string;
  exerciseId: string;
  status: 'pending' | 'in_progress' | 'corrected';
  score?: number;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  building: string;
}

export interface LogEntry {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details?: string;
}

export interface AttendanceRecord {
  id: string;
  candidateId: string;
  candidateCode: string;
  roomId: string;
  present: boolean;
  markedAt?: string;
}

export interface RankingEntry {
  code: string;
  totalScore: number;
  rank: number;
  validated: boolean;
}
