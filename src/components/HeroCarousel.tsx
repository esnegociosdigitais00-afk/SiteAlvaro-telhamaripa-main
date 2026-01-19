import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Truck, Store, Phone } from 'lucide-react';

// Dados de exemplo para o banner
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
  // Placeholder para a imagem 3D da telha
  productImage: "public/placeholder.svg" 
};

const HeroCarousel = () => {
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
  }, [emblaApi, setSelectedIndex]);

  // Componente do Banner
  const BannerSlide = () => (
    <div className="relative flex-[0_0_100%] min-w-0 h-full p-4 sm:p-8 lg:p-12">
      <div className="bg-gradient-to-r from-medium-blue to-dark-blue rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-10">
        
        {/* Conteúdo de Texto e Preço */}
        <div className="text-white lg:w-1/2 space-y-4 text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {bannerData.title}
          </h2>
          <p className="text-lg font-semibold text-gold">
            {bannerData.productName}
          </p>
          <p className="text-sm italic opacity-90">
            {bannerData.specs}
          </p>

          {/* Preços */}
          <div className="flex flex-col items-center lg:items-start space-y-1 pt-2">
            <span className="text-lg line-through opacity-70">
              {bannerData.priceOld}
            </span>
            <span className="text-5xl md:text-6xl font-black text-gold drop-shadow-lg">
              {bannerData.priceNew}
            </span>
          </div>
          
          {/* Texto Legal e Selos */}
          <p className="text-xs font-light pt-2 border-t border-white/30 mt-4">
            {bannerData.legalText}
          </p>
          
          <div className="flex justify-center lg:justify-start space-x-4 pt-4">
            {bannerData.seals.map((seal, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs font-bold text-gold bg-white/10 px-2 py-1 rounded-full">
                <seal.icon className="h-4 w-4" />
                <span>{seal.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem do Produto (Placeholder 3D) */}
        <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-xs md:max-w-md lg:max-w-full aspect-square">
            {/* Simulação da Isotelha 3D */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-300 rounded-xl shadow-2xl transform rotate-12 skew-y-3 opacity-70"></div>
                <div className="w-48 h-48 md:w-64 md:h-64 bg-red-700 rounded-xl shadow-2xl transform -rotate-6 skew-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white">
                    <div className="absolute bottom-0 left-0 right-0 bg-white/80 h-1/4 p-1 text-xs text-center text-gray-800 font-bold rounded-b-lg">
                        PIR 40mm
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {/* Renderiza o mesmo slide 3 vezes para simular o carrossel */}
          <BannerSlide />
          <BannerSlide />
          <BannerSlide />
        </div>
      </div>

      {/* Botões de Navegação (Setas) */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full h-10 w-10 hidden md:flex"
        onClick={scrollPrev}
      >
        <ArrowLeft className="h-5 w-5 text-dark-blue" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full h-10 w-10 hidden md:flex"
        onClick={scrollNext}
      >
        <ArrowRight className="h-5 w-5 text-dark-blue" />
      </Button>

      {/* Bolinhas Indicadoras */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300",
              index === selectedIndex ? "bg-gold w-6" : "bg-white/70 hover:bg-white",
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