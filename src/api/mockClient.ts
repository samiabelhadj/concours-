import axios from 'axios';
import {
  mockUsers,
  mockPhases,
  mockExercises,
  mockCopies,
  mockRooms,
  mockLogs,
  mockAttendance,
  mockRanking,
} from '@/data';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const mockClient = axios.create({ baseURL: '/api' });

mockClient.interceptors.response.use(async (config) => {
  await delay(300);
  return config;
});

export const mockApi = {
  getUsers: () => Promise.resolve({ data: mockUsers }),
  getPhases: () => Promise.resolve({ data: mockPhases }),
  getExercises: () => Promise.resolve({ data: mockExercises }),
  getCopies: (exerciseId?: string) =>
    Promise.resolve({
      data: exerciseId ? mockCopies.filter((c) => c.exerciseId === exerciseId) : mockCopies,
    }),
  getRooms: () => Promise.resolve({ data: mockRooms }),
  getLogs: () => Promise.resolve({ data: mockLogs }),
  getAttendance: () => Promise.resolve({ data: mockAttendance }),
  getRanking: () => Promise.resolve({ data: mockRanking }),
};
