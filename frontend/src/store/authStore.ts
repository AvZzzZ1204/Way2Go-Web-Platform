import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: User['role']) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

// Usuarios de ejemplo para demostración
const demoUsers: Record<string, User> = {
  admin: {
    id: '1',
    email: 'admin@way2go.com',
    name: 'Carlos Administrador',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    phone: '+34 600 123 456',
    language: 'es',
    createdAt: '2024-01-01',
  },
  provider: {
    id: '2',
    email: 'proveedor@way2go.com',
    name: 'María Proveedora',
    role: 'provider',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    phone: '+34 600 789 012',
    language: 'es',
    createdAt: '2024-02-01',
  },
  user: {
    id: '3',
    email: 'usuario@way2go.com',
    name: 'Juan Usuario',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    phone: '+34 600 345 678',
    language: 'es',
    createdAt: '2024-03-01',
  },
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email: string, password: string, role: User['role']) => {
    // Simulación de login - en producción esto llamaría a la API
    const user = demoUsers[role];
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  updateProfile: (data: Partial<User>) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    }));
  },
}));
