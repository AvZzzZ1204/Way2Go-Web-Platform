import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { TouristSiteCard } from '../components/TouristSiteCard';
import { mockTouristSites } from '../utils/mockData';
import { TouristSite } from '../types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export function Explore() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('popular');

  const handleViewDetails = (site: TouristSite) => {
    navigate(`/site/${site.id}`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-4">Explorar Experiencias</h1>
          <SearchBar />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-muted-foreground">
              {mockTouristSites.length} experiencias encontradas
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Ordenar por:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Más Popular</SelectItem>
                <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                <SelectItem value="rating">Mejor Valorados</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTouristSites.map((site) => (
            <TouristSiteCard
              key={site.id}
              site={site}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
