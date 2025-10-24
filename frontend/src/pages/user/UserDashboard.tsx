import { useAuthStore } from '../../store/authStore';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Calendar, Heart, MessageCircle, CreditCard, MapPin } from 'lucide-react';
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
import { mockBookings, mockTouristSites } from '../../utils/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export function UserDashboard() {
  const { user } = useAuthStore();

  const myBookings = mockBookings.filter((b) => b.userId === user?.id);
  const favorites = mockTouristSites.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Mi Panel</h1>
          <p className="text-muted-foreground">
            Bienvenido de nuevo, {user?.name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm">{user?.name}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
          <Avatar className="h-12 w-12">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Próximas Reservas</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div>2</div>
            <p className="text-xs text-muted-foreground">Experiencias confirmadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Favoritos</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div>8</div>
            <p className="text-xs text-muted-foreground">Experiencias guardadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Completadas</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div>15</div>
            <p className="text-xs text-muted-foreground">Experiencias disfrutadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Gastado</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div>€1,245</div>
            <p className="text-xs text-muted-foreground">Este año</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="bookings" className="w-full">
        <TabsList>
          <TabsTrigger value="bookings">Mis Reservas</TabsTrigger>
          <TabsTrigger value="favorites">Favoritos</TabsTrigger>
          <TabsTrigger value="payments">Pagos</TabsTrigger>
        </TabsList>

        <TabsContent value="bookings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reservas Activas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Experiencia</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Personas</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="max-w-[250px]">
                        <div className="truncate">{booking.siteName}</div>
                      </TableCell>
                      <TableCell>
                        {new Date(booking.date).toLocaleDateString('es-ES', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </TableCell>
                      <TableCell>{booking.guests}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            booking.status === 'confirmed'
                              ? 'default'
                              : booking.status === 'completed'
                              ? 'outline'
                              : 'secondary'
                          }
                        >
                          {booking.status === 'confirmed'
                            ? 'Confirmada'
                            : booking.status === 'completed'
                            ? 'Completada'
                            : 'Pendiente'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        €{booking.price * booking.guests}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mis Favoritos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {favorites.map((fav) => (
                  <div
                    key={fav.id}
                    className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={fav.images[0]}
                      alt={fav.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="mb-2 line-clamp-1">{fav.title}</h3>
                      <div className="flex items-center justify-between">
                        <span>€{fav.price}</span>
                        <Button size="sm">Ver</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Pagos</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Concepto</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead className="text-right">Importe</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>15 Oct 2025</TableCell>
                    <TableCell>Tour por la Sagrada Familia</TableCell>
                    <TableCell>Visa ****4532</TableCell>
                    <TableCell className="text-right">€90.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10 Oct 2025</TableCell>
                    <TableCell>Cata de Vinos en La Rioja</TableCell>
                    <TableCell>Mastercard ****8721</TableCell>
                    <TableCell className="text-right">€110.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>05 Sep 2025</TableCell>
                    <TableCell>Senderismo Picos de Europa</TableCell>
                    <TableCell>Visa ****4532</TableCell>
                    <TableCell className="text-right">€260.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Chat Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Mensajes</CardTitle>
          <Button variant="outline" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            Ver Todos
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" />
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p>Barcelona Tours</p>
                  <span className="text-xs text-muted-foreground">Hace 2h</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  Confirmación de tu reserva para mañana...
                </p>
              </div>
              <Badge variant="default">1</Badge>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <Avatar>
                <AvatarFallback>WE</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p>Wine Experience</p>
                  <span className="text-xs text-muted-foreground">Ayer</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  Gracias por tu reseña, esperamos verte pronto...
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
