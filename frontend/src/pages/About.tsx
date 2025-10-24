import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/ui/card';
import { Target, Users, Award, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="mb-4">Sobre Way2Go</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectamos viajeros con experiencias auténticas y proveedores de turismo local,
            creando momentos inolvidables y apoyando las economías locales.
          </p>
        </div>

        {/* Image */}
        <div className="mb-16 rounded-lg overflow-hidden max-w-4xl mx-auto">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200"
            alt="Team"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center">
            <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-2">Nuestra Misión</h3>
            <p className="text-sm text-muted-foreground">
              Hacer el turismo accesible y conectar viajeros con experiencias auténticas
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2">Comunidad</h3>
            <p className="text-sm text-muted-foreground">
              Una red de más de 50,000 viajeros y 500 proveedores locales
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mb-2">Calidad</h3>
            <p className="text-sm text-muted-foreground">
              Todas las experiencias son verificadas y evaluadas por expertos
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mb-2">Pasión</h3>
            <p className="text-sm text-muted-foreground">
              Amamos lo que hacemos y nos dedicamos a crear experiencias memorables
            </p>
          </Card>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
          <h2>Nuestra Historia</h2>
          <p className="text-muted-foreground">
            Way2Go nació en 2020 con la visión de transformar la forma en que las personas descubren
            y reservan experiencias turísticas. Creemos que viajar es más que visitar lugares; se trata
            de crear conexiones auténticas con las culturas locales y las personas.
          </p>
          <p className="text-muted-foreground">
            Comenzamos como una pequeña plataforma en Barcelona y hemos crecido para conectar viajeros
            con experiencias únicas en toda España. Nuestro equipo está formado por apasionados del turismo,
            tecnología y hospitalidad que trabajan cada día para hacer realidad experiencias inolvidables.
          </p>
        </div>

        {/* Team */}
        <div className="text-center mb-8">
          <h2 className="mb-4">Nuestro Equipo</h2>
          <p className="text-muted-foreground mb-12">
            Conoce a las personas que hacen posible Way2Go
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1">Carlos Martínez</h3>
              <p className="text-sm text-muted-foreground">CEO & Fundador</p>
            </div>

            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                  alt="CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1">Ana García</h3>
              <p className="text-sm text-muted-foreground">CTO</p>
            </div>

            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
                  alt="COO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1">Miguel Fernández</h3>
              <p className="text-sm text-muted-foreground">COO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
