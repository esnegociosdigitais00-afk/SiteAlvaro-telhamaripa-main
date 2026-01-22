import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Truck, Store, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Dados de exemplo para o banner (usado no desktop)
const bannerData = {
  title: "Ano Novo, Casa Nova!",
  productName: "Isotelha Colonial com isolamento em PIR - 40mm de espessura",
  specs: "Face superior Terracota ou Marfim e face interna com forro Branco",
  priceOld: "DE R$214,91",
  priceNew: "R$ 178,00 p/m²",
  legalText: "ATÉ 6X SEM JUROS NO CARTÃO, OU À VISTA NO BOLETO, TEM CEP PIX",
  seals: [
    { icon: Truck, text: "entrega BRASIL" },
    { icon: Store, text: "loja VETERAN" },
    { icon: Phone, text: "0800" },
  ],
  productImage: "public/placeholder.svg" 
};

// Array de banners para mobile
const mobileBanners = [
  { src: "/banner-mobile.png", alt: "Banner promocional Isotelha Colonial" },
  { src: "/banner-mobile-2.png", alt: "O Melhor para o seu lar - Isotelha Trapezoidal" },
];

// Componente para o slide de desktop
const DesktopBannerSlide = () => (
  <div className="relative flex-[0_0_100%] min-w-0 h-full"> 
    <div className="bg-gradient-to-r from-medium-blue to-dark-blue rounded-none shadow-2xl overflow-hidden h-full flex flex-col lg:flex-row items-center justify-between p-4 md:p-10">
      
      {/* Conteúdo de Texto e Preço */}
      <div className="text-white lg:w-1/2 space-y-2 text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
        <h2 className="text-xl md:text-4xl font-extrabold tracking-tight leading-tight">
          {bannerData.title}
        </h2>
        <p className="text-sm font-semibold text-gold">
          {bannerData.productName}
        </p>
        <p className="text-xs italic opacity-90">
          {bannerData.specs}
        </p>

        {/* Preços */}
        <div className="flex flex-col items-center lg:items-start space-y-1 pt-1">
          <span className="text-xs line-through opacity-70">
            {bannerData.priceOld}
          </span>
          <span className="text-3xl md:text-5xl font-black text-gold drop-shadow-lg">
            {bannerData.priceNew}
          </span>
        </div>
        
        {/* Texto Legal e Selos */}
        <p className="text-[10px] font-light pt-1 border-t border-white/30 mt-2">
          {bannerData.legalText}
        </p>
        
        <div className="flex justify-center lg:justify-start space-x-3 pt-3">
          {bannerData.seals.map((seal, index) => (
            <div key={index} className="flex items-center space-x-1 text-[10px] font-bold text-gold bg-white/10 px-2 py-1 rounded-full">
              <seal.icon className="h-3 w-3" />
              <span>{seal.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Imagem do Produto (Placeholder 3D) */}
      <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
        <div className="relative w-full max-w-[120px] md:max-w-sm lg:max-w-full aspect-square">
          {/* Simulação da Isotelha 3D */}
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-48 md:h-48 bg-gray-300 rounded-xl shadow-2xl transform rotate-12 skew-y-3 opacity-70"></div>
              <div className="w-24 h-24 md:w-48 md:h-48 bg-red-700 rounded-xl shadow-2xl transform -rotate-6 skew-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white">
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 h-1/4 p-1 text-[10px] text-center text-gray-800 font-bold rounded-b-lg">
                      PIR 40mm
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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

  return (
    <div className="relative w-full h-[250px] md:h-[450px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {isMobile ? (
            mobileBanners.map((banner, index) => (
              <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <>
              {/* O banner de desktop é um design único, então repetimos para o efeito de carrossel */}
              <DesktopBannerSlide />
              <DesktopBannerSlide />
              <DesktopBannerSlide />
            </>
          )}
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