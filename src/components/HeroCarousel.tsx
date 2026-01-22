import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Array de banners para mobile
const mobileBanners = [
  { src: "/banner-mobile.png", alt: "Banner promocional Isotelha Colonial" },
  { src: "/banner-mobile-2.png", alt: "O Melhor para o seu lar - Isotelha Trapezoidal" },
];

// Array de banners para desktop
const desktopBanners = [
  { src: "/banner-desktop-1.png", alt: "Banner promocional Isotelha Trapezoidal com isolamento em PIR" },
  { src: "/banner-desktop-2.png", alt: "Banner promocional Isotelha Trapezoidal com isolamento em EPS" },
];

const HeroCarousel = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    emblaApi.on('reInit', () => {
        setScrollSnaps(emblaApi.scrollSnapList());
        setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const currentBanners = isMobile ? mobileBanners : desktopBanners;

  return (
    <div className="relative w-full h-[250px] md:h-[450px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {currentBanners.map((banner, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botões de Navegação (Setas) */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full h-8 w-8 hidden md:flex"
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-4 w-4 text-dark-blue" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full h-8 w-8 hidden md:flex"
        onClick={scrollNext}
      >
        <ArrowRight className="h-4 w-4 text-dark-blue" />
      </Button>

      {/* Bolinhas Indicadoras */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              index === selectedIndex ? "bg-gold w-4" : "bg-white/70 hover:bg-white",
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;