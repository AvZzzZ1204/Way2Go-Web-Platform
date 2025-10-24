import { useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Plus, Eye, Calendar, Euro, TrendingUp } from 'lucide-react';
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
import { mockTouristSites, mockBookings } from '../../utils/mockData';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

export function ProviderDashboard() {
  const { user } = useAuthStore();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const myPublications = mockTouristSites.slice(0, 3);
  const myBookings = mockBookings.filter((b) => b.status !== 'cancelled');

  const stats = [
    {
      title: 'Publicaciones Activas',
      value: '12',
      icon: Eye,
    },
    {
      title: 'Reservas del Mes',
      value: '47',
      icon: Calendar,
    },
    {
      title: 'Ingresos del Mes',
      value: '€2,340',
      icon: Euro,
    },
    {
      title: 'Calificación Promedio',
      value: '4.8',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Panel de Proveedor</h1>
          <p className="text-muted-foreground">
            Gestiona tus experiencias turísticas
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
                <div>{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Publications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Mis Publicaciones</CardTitle>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Crear
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Crear Nueva Experiencia</DialogTitle>
                  <DialogDescription>
                    Completa los detalles de tu nueva experiencia turística
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" placeholder="Ej: Tour por la ciudad" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe tu experiencia..."
                      rows={4}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="price">Precio (€)</Label>
                      <Input id="price" type="number" placeholder="45" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Categoría</Label>
                      <Input id="category" placeholder="Cultura" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Ubicación</Label>
                    <Input id="location" placeholder="Barcelona, España" />
                  </div>
                  <Button onClick={() => setIsCreateDialogOpen(false)}>
                    Crear Publicación
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {myPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <img
                    src={pub.images[0]}
                    alt={pub.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="truncate">{pub.title}</p>
                    <p className="text-sm text-muted-foreground">
                      €{pub.price} · {pub.reviews} reseñas
                    </p>
                  </div>
                  <Badge variant={pub.availability ? 'default' : 'secondary'}>
                    {pub.availability ? 'Activo' : 'Inactivo'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Reservas Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {myBookings.slice(0, 4).map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.userName}</TableCell>
                    <TableCell>
                      {new Date(booking.date).toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: 'short',
                      })}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          booking.status === 'confirmed' ? 'default' : 'secondary'
                        }
                      >
                        {booking.status === 'confirmed'
                          ? 'Confirmada'
                          : 'Pendiente'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">€{booking.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Calendar Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Calendario de Disponibilidad</CardTitle>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Sincronizar con Google Calendar
          </Button>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
            <div className="text-center text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Vista de calendario próximamente</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
