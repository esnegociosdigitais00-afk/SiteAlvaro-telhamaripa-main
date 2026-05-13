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
              slug: product.slug,
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

  // IDs dos produtos solicitados para a primeira linha: PU (10), EPS (7), Galvalume (6)
  const topRowIds = [10, 7, 6];
  
  // Filtra e ordena os produtos da primeira linha conforme a solicitação
  const topRowProducts = topRowIds
    .map(id => products.find(p => p.id === id))
    .filter((p): p is typeof products[0] => p !== undefined);

  // Todos os outros produtos vão para a segunda linha
  const bottomRowProducts = products.filter(p => !topRowIds.includes(p.id));

  // Para o Desktop, mantemos a ordenação padrão (Isotelhas primeiro)
  const desktopProducts = [...products].sort((a, b) => {
    const aIsIsotelha = a.name.toLowerCase().startsWith('isotelha');
    const bIsIsotelha = b.name.toLowerCase().startsWith('isotelha');
    if (aIsIsotelha && !bIsIsotelha) return -1;
    if (!aIsIsotelha && bIsIsotelha) return 1;
    return 0;
  });

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6 border-b-4 border-gold inline-block pb-1">
          Produtos em Destaque
        </h2>
        
        {isMobile ? (
          // Layout de Carrossel para Mobile com as fileiras específicas
          <div className="space-y-6">
            <CarouselRow products={topRowProducts} />
            <CarouselRow products={bottomRowProducts} />
          </div>
        ) : (
          // Layout de Grid para Desktop
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {desktopProducts.map((product) => (
              <ProductCard key={product.id} product={{
                id: product.id,
                name: product.name,
                slug: product.slug,
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