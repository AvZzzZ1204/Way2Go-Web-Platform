import { Search, SlidersHorizontal, MapPin, Calendar, Users } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useState } from 'react';

export function SearchBar() {
  const [priceRange, setPriceRange] = useState([0, 200]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card border rounded-lg shadow-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Location */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="¿A dónde quieres ir?"
              className="pl-9"
            />
          </div>

          {/* Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="date"
              placeholder="Fecha"
              className="pl-9"
            />
          </div>

          {/* Guests */}
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Select>
              <SelectTrigger className="pl-9">
                <SelectValue placeholder="Personas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 persona</SelectItem>
                <SelectItem value="2">2 personas</SelectItem>
                <SelectItem value="3">3 personas</SelectItem>
                <SelectItem value="4">4 personas</SelectItem>
                <SelectItem value="5+">5+ personas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="flex gap-2">
            <Button className="flex-1">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>

            {/* Filters */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  <h3>Filtros Avanzados</h3>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label>Categoría</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas las categorías" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="cultura">Cultura</SelectItem>
                        <SelectItem value="aventura">Aventura</SelectItem>
                        <SelectItem value="gastronomia">Gastronomía</SelectItem>
                        <SelectItem value="deportes">Deportes</SelectItem>
                        <SelectItem value="naturaleza">Naturaleza</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label>Rango de Precio</Label>
                    <div className="pt-2">
                      <Slider
                        min={0}
                        max={500}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>€{priceRange[0]}</span>
                        <span>€{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="space-y-2">
                    <Label>Calificación Mínima</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Cualquiera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Cualquiera</SelectItem>
                        <SelectItem value="4">4+ estrellas</SelectItem>
                        <SelectItem value="4.5">4.5+ estrellas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">Aplicar Filtros</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
