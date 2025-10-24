// Tipos principales de la aplicación Way2Go

export type UserRole = 'admin' | 'provider' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  language?: 'es' | 'en';
  createdAt: string;
}

export interface TouristSite {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  category: string;
  images: string[];
  providerId: string;
  providerName: string;
  rating: number;
  reviews: number;
  availability: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Booking {
  id: string;
  siteId: string;
  siteName: string;
  userId: string;
  userName: string;
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  price: number;
  guests: number;
}

export interface Review {
  id: string;
  siteId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface DashboardStats {
  totalUsers?: number;
  totalProviders?: number;
  totalSites?: number;
  totalBookings?: number;
  revenue?: number;
  views?: number;
}
