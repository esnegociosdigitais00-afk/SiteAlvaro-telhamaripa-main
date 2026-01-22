import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Reutilizando a estrutura de ProductCard para consistência
interface Product {
  id: number;
  name: string;
  image: string;
}

// Mock data para Calhas e Rufos
const mockProducts: Product[] = [
  { id: 101, name: "Calha Pluvial", image: "/calhas-e-rufos.png" },
  { id: 102, name: "Rufo de Encosto", image: "/calhas-e-rufos.png" },
  { id: 103, name: "Rufo Pingadeira", image: "/calhas-e-rufos.png" },
  { id: 104, name: "Condutor Retangular", image: "/calhas-e-rufos.png" },
  { id: 105, name: "Bocal para Condutor", image: "/calhas-e-rufos.png" },
];

const RelatedProductCard = ({ product }: { product: Product }) => (
  <Card className="w-full overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="h-32 bg-gray-100 flex items-center justify-center">
      <img 
        src={product.image} 
        alt={product.name} 
        className="h-16 w-16 object-contain opacity-50" 
      />
    </div>
    <CardContent className="p-3 text-center">
      <h3 className="text-sm font-semibold text-dark-blue truncate mb-2">
        {product.name}
      </h3>
      <Button 
        className="w-full h-8 text-xs bg-medium-blue hover:bg-medium-blue/90 rounded-lg"
        onClick={() => console.log(`Navegar para ${product.name}`)}
      >
        Ver Detalhes
      </Button>
    </CardContent>
  </Card>
);

const ProductRelatedCarousel = () => {
  const options: EmblaOptionsType = {
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = React.useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative py-4">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {mockProducts.map((product) => (
            <div 
              key={product.id} 
              className="embla__slide pl-4"
              // Responsividade: 2 itens em mobile, 3 em sm, 4 em md, 5 em lg
              style={{ flex: '0 0 50%', minWidth: '50%' }} 
            >
              <div className="sm:min-w-[calc(33.333%-1rem)] md:min-w-[calc(25%-1rem)] lg:min-w-[calc(20%-1rem)]">
                <RelatedProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de Navegação */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full h-8 w-8 shadow-md transition-opacity hidden md:flex",
          prevBtnDisabled && "opacity-50 cursor-not-allowed"
        )}
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        aria-label="Anterior"
      >
        <ArrowLeft className="h-4 w-4 text-dark-blue" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full h-8 w-8 shadow-md transition-opacity hidden md:flex",
          nextBtnDisabled && "opacity-50 cursor-not-allowed"
        )}
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        aria-label="Próximo"
      >
        <ArrowRight className="h-4 w-4 text-dark-blue" />
      </Button>
    </div>
  );
};

export default ProductRelatedCarousel;