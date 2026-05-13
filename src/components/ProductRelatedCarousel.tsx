import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductRelatedCarouselProps {
  categorySlug: string;
  currentProductId: number;
}

const ProductRelatedCarousel: React.FC<ProductRelatedCarouselProps> = ({ categorySlug, currentProductId }) => {
  const relatedProducts = products.filter(
    (p) => p.categorySlug === categorySlug && p.id !== currentProductId
  );

  const options: EmblaOptionsType = {
    loop: relatedProducts.length > 5,
    align: 'start',
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = React.useCallback((emblaApi: any) => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="relative py-4">
      <div className="embla overflow-hidden -mx-2" ref={emblaRef}>
        <div className="embla__container flex">
          {relatedProducts.map((product) => (
            <div 
              key={product.id} 
              className="embla__slide flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 px-2"
            >
              <ProductCard product={{
                id: product.id,
                name: product.name,
                slug: product.slug,
                image: product.images[0]
              }} />
            </div>
          ))}
        </div>
      </div>

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