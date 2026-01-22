import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Heart, Share2, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { showSuccess, showError } from '@/utils/toast'; // Importando utilitários de toast

interface Product {
  id: number;
  name: string;
  image: string;
}

const mockProducts: Product[] = [
  { id: 1, name: "Isotelha Trapezoidal Térmica Sanduíche Galvalume SEM FORRO– núcleo em PIR 30 mm", image: "/isotelha-sem-forro.png" },
  { id: 2, name: "Isotelha Colonial", image: "public/placeholder.svg" },
  { id: 3, name: "Painel Termoacústico", image: "public/placeholder.svg" },
  { id: 4, name: "Blocos de Concreto Celular", image: "public/placeholder.svg" },
  { id: 5, name: "Manta Asfáltica", image: "public/placeholder.svg" },
  { id: 6, name: "Cimento CP V", image: "public/placeholder.svg" },
  { id: 7, name: "Argamassa Polimérica", image: "public/placeholder.svg" },
  { id: 8, name: "Telha de Fibrocimento", image: "public/placeholder.svg" },
];

const ProductCard = ({ product }: { product: Product }) => {
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showSuccess("Link do produto copiado para a área de transferência!");
    } catch (err) {
      showError("Falha ao copiar o link.");
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault(); // Impede a navegação do Link pai
    
    const productUrl = `${window.location.origin}/produto/${product.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Confira este produto incrível: ${product.name}`,
          url: productUrl,
        });
      } catch (error) {
        // Se o usuário cancelou ou houve um erro que não seja AbortError, tenta copiar
        if (error instanceof Error && error.name !== 'AbortError') {
          showError("Não foi possível abrir o menu de compartilhamento. Copiando o link.");
          await copyToClipboard(productUrl);
        }
      }
    } else {
      // Fallback: Copiar para a área de transferência
      await copyToClipboard(productUrl);
    }
  };

  return (
    <Card className="w-[250px] flex-shrink-0 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-40 flex items-center justify-center p-2">
        {/* Imagem do Produto */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md">
            <Scale className="h-4 w-4 text-dark-blue" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md">
            <Heart className="h-4 w-4 text-dark-blue" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md"
            onClick={handleShare} // Adicionando a função de compartilhamento
          >
            <Share2 className="h-4 w-4 text-dark-blue" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-base font-semibold text-dark-blue h-12 flex items-center justify-center text-center mb-2">
          {product.name}
        </h3>
        <Link to={`/produto/${product.id}`}> {/* Usando Link para navegação */}
          <Button className="w-full bg-medium-blue hover:bg-medium-blue/90 rounded-lg transition-colors">
            Ver Detalhes
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const ProductGallery = () => {
  const options: EmblaOptionsType = {
    loop: false,
    align: 'start',
    // Mostrar 1 card em mobile, 2 em sm, 3 em md, 4 em lg
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = React.useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6 border-b-4 border-gold inline-block pb-1">
          Produtos em Destaque
        </h2>
        
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -ml-4"> {/* Margem negativa para compensar o padding/gap */}
              {mockProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="embla__slide pl-4"
                  style={{ flex: '0 0 100%', minWidth: '100%' }} // Base mobile: 1 item
                >
                  <div className="sm:min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1rem)]">
                    <ProductCard product={product} />
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
              "absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full h-10 w-10 shadow-md transition-opacity",
              prevBtnDisabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Anterior"
          >
            <ArrowLeft className="h-5 w-5 text-dark-blue" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full h-10 w-10 shadow-md transition-opacity",
              nextBtnDisabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Próximo"
          >
            <ArrowRight className="h-5 w-5 text-dark-blue" />
          </Button>
        </div>

        {/* Indicadores (Dots) - Opcional, mas útil para navegação */}
        <div className="flex justify-center mt-6 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                index === selectedIndex ? "bg-medium-blue w-4" : "bg-gray-300 hover:bg-gray-400",
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;