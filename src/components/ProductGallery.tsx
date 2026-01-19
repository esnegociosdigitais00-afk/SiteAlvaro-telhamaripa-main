import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Heart, Share2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
}

const mockProducts: Product[] = [
  { id: 1, name: "Isotelha Trapezoidal", image: "public/placeholder.svg" },
  { id: 2, name: "Isotelha Colonial", image: "public/placeholder.svg" },
  { id: 3, name: "Painel Termoacústico", image: "public/placeholder.svg" },
  { id: 4, name: "Blocos de Concreto Celular", image: "public/placeholder.svg" },
  { id: 5, name: "Manta Asfáltica", image: "public/placeholder.svg" },
  { id: 6, name: "Cimento CP V", image: "public/placeholder.svg" },
  { id: 7, name: "Argamassa Polimérica", image: "public/placeholder.svg" },
];

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="w-[250px] flex-shrink-0 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-40 bg-gray-100 flex items-center justify-center">
      {/* Imagem do Produto Placeholder */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="h-24 w-24 object-contain opacity-50" 
      />
      <div className="absolute top-2 right-2 flex flex-col space-y-1">
        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md">
          <Scale className="h-4 w-4 text-dark-blue" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md">
          <Heart className="h-4 w-4 text-dark-blue" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md">
          <Share2 className="h-4 w-4 text-dark-blue" />
        </Button>
      </div>
    </div>
    <CardContent className="p-4">
      <h3 className="text-base font-semibold text-dark-blue truncate mb-2">
        {product.name}
      </h3>
      <Button className="w-full bg-medium-blue hover:bg-medium-blue/90 rounded-lg transition-colors">
        Ver Detalhes
      </Button>
    </CardContent>
  </Card>
);

const ProductGallery = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6 border-b-4 border-gold inline-block pb-1">
          Produtos em Destaque
        </h2>
        
        {/* Grid Horizontal Scrollável */}
        <div className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Estilo para esconder a barra de rolagem no Tailwind (adicionado via CSS global ou utilitário, mas aqui simulamos a classe) */}
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProductGallery;