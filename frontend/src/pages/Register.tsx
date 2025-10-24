import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Checkbox } from '../components/ui/checkbox';

export function Register() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Crear Cuenta</CardTitle>
          <CardDescription>
            Únete a Way2Go y descubre experiencias increíbles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="user">Usuario</TabsTrigger>
              <TabsTrigger value="provider">Proveedor</TabsTrigger>
            </TabsList>

            <TabsContent value="user" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name-user">Nombre Completo</Label>
                <Input
                  id="name-user"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-user">Email</Label>
                <Input
                  id="email-user"
                  type="email"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-user">Teléfono</Label>
                <Input
                  id="phone-user"
                  type="tel"
                  placeholder="+34 600 000 000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-user">Contraseña</Label>
                <Input
                  id="password-user"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-user" />
                <label
                  htmlFor="terms-user"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Acepto los{' '}
                  <Link to="/terms" className="text-primary hover:underline">
                    términos y condiciones
                  </Link>
                </label>
              </div>
              <Button className="w-full">Crear Cuenta</Button>
            </TabsContent>

            <TabsContent value="provider" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="business-name">Nombre del Negocio</Label>
                <Input
                  id="business-name"
                  placeholder="Mi Empresa Turística"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-name">Nombre de Contacto</Label>
                <Input
                  id="contact-name"
                  placeholder="María López"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-provider">Email</Label>
                <Input
                  id="email-provider"
                  type="email"
                  placeholder="contacto@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-provider">Teléfono</Label>
                <Input
                  id="phone-provider"
                  type="tel"
                  placeholder="+34 900 000 000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-provider">Contraseña</Label>
                <Input
                  id="password-provider"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-provider" />
                <label
                  htmlFor="terms-provider"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Acepto los{' '}
                  <Link to="/terms" className="text-primary hover:underline">
                    términos y condiciones
                  </Link>
                </label>
              </div>
              <Button className="w-full">Crear Cuenta de Proveedor</Button>
              <p className="text-xs text-muted-foreground text-center">
                Tu cuenta será revisada por nuestro equipo en 24-48 horas
              </p>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Inicia sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
