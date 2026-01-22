import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
  const hasMultipleImages = images.length > 1;
  const options: EmblaOptionsType = { loop: hasMultipleImages };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="space-y-4">
      {/* Imagem Principal com Navegação */}
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((image, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <img 
                  src={image} 
                  alt={`${productName}${hasMultipleImages ? ` - Imagem ${index + 1}` : ''}`} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Setas de Navegação */}
        {hasMultipleImages && (
          <>
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition-opacity"
              onClick={scrollPrev}
              aria-label="Imagem anterior"
            >
              <ArrowLeft className="h-5 w-5 text-dark-blue" />
            </button>
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition-opacity"
              onClick={scrollNext}
              aria-label="Próxima imagem"
            >
              <ArrowRight className="h-5 w-5 text-dark-blue" />
            </button>
          </>
        )}
      </div>

      {/* Miniaturas Scrolláveis Horizontalmente */}
      {hasMultipleImages && (
        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
                index === selectedIndex 
                  ? "border-medium-blue shadow-md" 
                  : "border-gray-300 hover:border-medium-blue/50"
              )}
              aria-label={`Ver miniatura ${index + 1}`}
            >
              <img 
                src={image} 
                alt={`Miniatura ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;