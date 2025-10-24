import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="mb-4">Contacta con Nosotros</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Envíanos un mensaje
            y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      info@way2go.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      soporte@way2go.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">
                      +34 900 123 456
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Lun - Vie: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1">Oficina</h3>
                    <p className="text-sm text-muted-foreground">
                      Calle Principal 123
                    </p>
                    <p className="text-sm text-muted-foreground">
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1">Horario</h3>
                    <p className="text-sm text-muted-foreground">
                      Lunes - Viernes: 9:00 - 18:00
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                  />
                </div>
                <Button className="w-full">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-8 max-w-6xl mx-auto">
          <CardContent className="p-0">
            <div className="h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Mapa de Google Maps aquí</p>
                <p className="text-sm">Ubicación: Calle Principal 123, Madrid</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
