import { Star, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { TouristSite } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface TouristSiteCardProps {
  site: TouristSite;
  onViewDetails?: (site: TouristSite) => void;
}

export function TouristSiteCard({ site, onViewDetails }: TouristSiteCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={site.images[0]}
          alt={site.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
          />
        </Button>
        <Badge className="absolute top-2 left-2">{site.category}</Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="line-clamp-1">{site.title}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{site.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {site.description}
        </p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{site.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-muted-foreground text-sm">Desde</span>
            <div>
              <span className="mr-1">€{site.price}</span>
              <span className="text-sm text-muted-foreground">/ persona</span>
            </div>
          </div>
          <Button size="sm" onClick={() => onViewDetails?.(site)}>
            Ver Detalles
          </Button>
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          {site.reviews} reseñas
        </div>
      </CardContent>
    </Card>
  );
}
