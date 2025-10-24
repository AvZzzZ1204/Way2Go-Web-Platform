import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { SearchBar } from '../components/SearchBar';
import { TouristSiteCard } from '../components/TouristSiteCard';
import { mockTouristSites } from '../utils/mockData';
import { ArrowRight, Star, Shield, CreditCard, HeadphonesIcon } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TouristSite } from '../types';

export function Home() {
  const navigate = useNavigate();

  const handleViewDetails = (site: TouristSite) => {
    navigate(`/site/${site.id}`);
  };

  const featuredSites = mockTouristSites.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="mb-4 text-white">
            Descubre Experiencias Inolvidables
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conectamos viajeros con las mejores experiencias turísticas de España
          </p>
          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="mb-2">Calidad Garantizada</h3>
              <p className="text-sm text-muted-foreground">
                Todas nuestras experiencias son verificadas y evaluadas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2">Reserva Segura</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de pago protegido y garantía de devolución
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="mb-2">Mejor Precio</h3>
              <p className="text-sm text-muted-foreground">
                Precios competitivos y ofertas exclusivas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-6 w-6" />
              </div>
              <h3 className="mb-2">Soporte 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Atención al cliente disponible en todo momento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Experiencias Destacadas</h2>
              <p className="text-muted-foreground">
                Las actividades más populares seleccionadas para ti
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate('/explore')}>
              Ver Todas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSites.map((site) => (
              <TouristSiteCard
                key={site.id}
                site={site}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-primary-foreground">
            ¿Eres un proveedor de experiencias?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Únete a Way2Go y conecta con miles de viajeros que buscan experiencias únicas
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate('/register')}
          >
            Registra tu Negocio
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Experiencias</div>
            </div>
            <div>
              <div className="mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Clientes Felices</div>
            </div>
            <div>
              <div className="mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Proveedores</div>
            </div>
            <div>
              <div className="mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Calificación</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
