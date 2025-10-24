import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      // Navegación
      home: 'Inicio',
      explore: 'Explorar',
      about: 'Nosotros',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      register: 'Registrarse',
      logout: 'Cerrar Sesión',
      
      // Dashboard
      dashboard: 'Panel de Control',
      profile: 'Perfil',
      settings: 'Configuración',
      notifications: 'Notificaciones',
      
      // Admin
      users: 'Usuarios',
      providers: 'Proveedores',
      sites: 'Sitios Turísticos',
      bookings: 'Reservas',
      statistics: 'Estadísticas',
      
      // Provider
      myPublications: 'Mis Publicaciones',
      createPublication: 'Crear Publicación',
      calendar: 'Calendario',
      myBookings: 'Mis Reservas',
      
      // User
      search: 'Buscar',
      favorites: 'Favoritos',
      myReservations: 'Mis Reservaciones',
      paymentHistory: 'Historial de Pagos',
      
      // Common
      save: 'Guardar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Eliminar',
      view: 'Ver',
      close: 'Cerrar',
      loading: 'Cargando...',
      
      // Messages
      welcomeBack: 'Bienvenido de nuevo',
      noResults: 'No se encontraron resultados',
    },
  },
  en: {
    translation: {
      // Navigation
      home: 'Home',
      explore: 'Explore',
      about: 'About Us',
      contact: 'Contact',
      login: 'Log In',
      register: 'Sign Up',
      logout: 'Log Out',
      
      // Dashboard
      dashboard: 'Dashboard',
      profile: 'Profile',
      settings: 'Settings',
      notifications: 'Notifications',
      
      // Admin
      users: 'Users',
      providers: 'Providers',
      sites: 'Tourist Sites',
      bookings: 'Bookings',
      statistics: 'Statistics',
      
      // Provider
      myPublications: 'My Publications',
      createPublication: 'Create Publication',
      calendar: 'Calendar',
      myBookings: 'My Bookings',
      
      // User
      search: 'Search',
      favorites: 'Favorites',
      myReservations: 'My Reservations',
      paymentHistory: 'Payment History',
      
      // Common
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View',
      close: 'Close',
      loading: 'Loading...',
      
      // Messages
      welcomeBack: 'Welcome back',
      noResults: 'No results found',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
