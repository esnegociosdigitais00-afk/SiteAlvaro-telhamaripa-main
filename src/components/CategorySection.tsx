import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface Category {
  name: string;
  slug: string;
  image: string;
}

const categories: Category[] = [
  { name: "Telha Térmica trapezoidal Confort", slug: "telha-termica-trapezoidal-confort", image: "/isotelha-trapezoidal.png" },
  { name: "Telha Metálica Sanduiche", slug: "telha-metalica-sanduiche", image: "public/placeholder.svg" },
  { name: "Calhas e rufos", slug: "calhas-e-rufos", image: "public/placeholder.svg" },
];

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <Link 
      to={`/categoria/${category.slug}`}
      className="flex flex-col items-center text-center group transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg p-2 rounded-xl cursor-pointer h-full justify-start"
    >
      <div className="w-28 h-28 md:w-32 md:h-32 bg-[#f3f4f6] rounded-full flex items-center justify-center mb-3 transition-colors group-hover:bg-[#e5e7eb] shadow-md p-2">
        {/* Imagem da Categoria */}
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-contain" 
        />
      </div>
      <span className="text-sm md:text-base font-medium text-[#1f2937] px-1">
        {category.name}
      </span>
    </Link>
  );
};

const CategorySection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-[#f9fafb] py-10 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-dark-blue mb-8">
          Nossas Categorias
        </h2>
        
        {isMobile ? (
          // Mobile: Horizontal scroll
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <div 
                key={category.slug} 
                // Ajustando a largura para se adequar melhor a 3 itens
                className="flex-shrink-0 w-[45%] sm:w-[30%]" 
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        ) : (
          // Desktop/Tablet: Grid layout para 3 colunas
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;