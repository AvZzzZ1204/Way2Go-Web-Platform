import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';
import {
  LayoutDashboard,
  Users,
  Building2,
  MapPin,
  Settings,
  Bell,
  Moon,
  Sun,
  FileText,
  Calendar,
  Heart,
  CreditCard,
  MessageCircle,
  BarChart3,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { cn } from '../components/ui/utils';
import { Badge } from '../components/ui/badge';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const { user } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();

  const adminNavItems = [
    { icon: LayoutDashboard, label: 'Panel', path: '/admin' },
    { icon: Users, label: 'Usuarios', path: '/admin/users' },
    { icon: Building2, label: 'Proveedores', path: '/admin/providers' },
    { icon: MapPin, label: 'Sitios', path: '/admin/sites' },
    { icon: BarChart3, label: 'Estadísticas', path: '/admin/stats' },
    { icon: Settings, label: 'Configuración', path: '/admin/settings' },
  ];

  const providerNavItems = [
    { icon: LayoutDashboard, label: 'Panel', path: '/provider' },
    { icon: FileText, label: 'Publicaciones', path: '/provider/publications' },
    { icon: Calendar, label: 'Calendario', path: '/provider/calendar' },
    { icon: Users, label: 'Reservas', path: '/provider/bookings' },
    { icon: BarChart3, label: 'Estadísticas', path: '/provider/stats' },
    { icon: Settings, label: 'Configuración', path: '/provider/settings' },
  ];

  const userNavItems = [
    { icon: LayoutDashboard, label: 'Panel', path: '/user' },
    { icon: Calendar, label: 'Mis Reservas', path: '/user/bookings' },
    { icon: Heart, label: 'Favoritos', path: '/user/favorites' },
    { icon: CreditCard, label: 'Pagos', path: '/user/payments' },
    { icon: MessageCircle, label: 'Mensajes', path: '/user/messages' },
    { icon: Settings, label: 'Configuración', path: '/user/settings' },
  ];

  const navItems =
    user?.role === 'admin'
      ? adminNavItems
      : user?.role === 'provider'
      ? providerNavItems
      : userNavItems;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b px-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg">
                <span>Way2Go</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <div
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="border-t p-4 space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-full justify-start"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 mr-2" />
              ) : (
                <Sun className="h-4 w-4 mr-2" />
              )}
              {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
            </Button>
            <Link to="/">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                  3
                </Badge>
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
