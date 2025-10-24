import { useAuthStore } from '../../store/authStore';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Users, Building2, MapPin, Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { mockBookings } from '../../utils/mockData';

export function AdminDashboard() {
  const { user } = useAuthStore();

  const stats = [
    {
      title: 'Total Usuarios',
      value: '12,547',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Proveedores Activos',
      value: '482',
      change: '+8.2%',
      trend: 'up',
      icon: Building2,
    },
    {
      title: 'Sitios Turísticos',
      value: '1,253',
      change: '+15.3%',
      trend: 'up',
      icon: MapPin,
    },
    {
      title: 'Reservas del Mes',
      value: '3,421',
      change: '-3.1%',
      trend: 'down',
      icon: Calendar,
    },
  ];

  const recentBookings = mockBookings.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Panel de Administración</h1>
          <p className="text-muted-foreground">
            Bienvenido, {user?.name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm">{user?.name}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
          <Avatar>
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="mb-1">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span
                    className={
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">vs mes anterior</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Reservas Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Experiencia</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Precio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.userName}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {booking.siteName}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          booking.status === 'confirmed'
                            ? 'default'
                            : booking.status === 'pending'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {booking.status === 'confirmed'
                          ? 'Confirmada'
                          : booking.status === 'pending'
                          ? 'Pendiente'
                          : 'Completada'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">€{booking.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p>Gestionar Usuarios</p>
                    <p className="text-sm text-muted-foreground">
                      Ver y administrar usuarios
                    </p>
                  </div>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p>Gestionar Proveedores</p>
                    <p className="text-sm text-muted-foreground">
                      Aprobar o rechazar proveedores
                    </p>
                  </div>
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p>Sitios Turísticos</p>
                    <p className="text-sm text-muted-foreground">
                      Revisar y moderar publicaciones
                    </p>
                  </div>
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p>Configuración del Sistema</p>
                    <p className="text-sm text-muted-foreground">
                      Ajustes generales de la plataforma
                    </p>
                  </div>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
