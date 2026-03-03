import { create } from 'zustand';
import type { User, Role } from '@/types';
import { mockUsers } from '@/data';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role?: Role) => boolean;
  loginAsRole: (role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (email: string, _password: string, role?: Role) => {
    const users = role
      ? mockUsers.filter((u) => u.role === role)
      : mockUsers;
    const user = users.find((u) => u.email === email) ?? users[0];
    if (user) {
      set({ user, isAuthenticated: true });
      return true;
    }
    set({ user: mockUsers.find((u) => u.role === role) ?? mockUsers[0], isAuthenticated: true });
    return true;
  },

  loginAsRole: (role: Role) => {
    const user = mockUsers.find((u) => u.role === role) ?? mockUsers[0];
    set({ user, isAuthenticated: true });
  },

  logout: () => set({ user: null, isAuthenticated: false }),
}));
