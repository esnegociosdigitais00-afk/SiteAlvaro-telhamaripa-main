import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useIsMobile } from '@/hooks/use-mobile';
import useEmblaCarousel from 'embla-carousel-react';

// Componente interno para renderizar uma fileira do carrossel
const CarouselRow = ({ products: rowProducts }: { products: typeof products }) => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  return (
    <div className="embla overflow-hidden -mx-2" ref={emblaRef}>
      <div className="embla__container flex">
        {rowProducts.map((product) => (
          <div 
            key={product.id} 
            className="embla__slide flex-[0_0_50%] sm:flex-[0_0_40%] min-w-0 px-2"
          >
            <ProductCard product={{
              id: product.id,
              name: product.name,
              image: product.images[0]
            }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductGallery = () => {
  const isMobile = useIsMobile();

  // Separa os produtos em duas fileiras
  const topRowProducts = products.filter((_, index) => index % 2 === 0);
  const bottomRowProducts = products.filter((_, index) => index % 2 !== 0);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6 border-b-4 border-gold inline-block pb-1">
          Produtos em Destaque
        </h2>
        
        {isMobile ? (
          // Layout de Carrossel para Mobile
          <div className="space-y-6">
            <CarouselRow products={topRowProducts} />
            <CarouselRow products={bottomRowProducts} />
          </div>
        ) : (
          // Layout de Grid para Desktop
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={{
                id: product.id,
                name: product.name,
                image: product.images[0]
              }} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;