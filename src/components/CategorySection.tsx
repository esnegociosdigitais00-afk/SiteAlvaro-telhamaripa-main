import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface Category {
  name: string;
  slug: string;
}

const categories: Category[] = [
  { name: "Isotelha Trapezoidal", slug: "isotelha-trapezoidal" },
  { name: "Isotelha Colonial", slug: "isotelha-colonial" },
  { name: "Painel", slug: "painel" },
  { name: "Blocos", slug: "blocos" },
  { name: "Lajotas", slug: "lajotas" },
  { name: "Telha de Fibrocimento", slug: "telha-fibrocimento" },
];

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <Link 
      to={`/categoria/${category.slug}`}
      className="flex flex-col items-center text-center group transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg p-2 rounded-xl cursor-pointer h-full justify-start"
    >
      <div className="w-28 h-28 md:w-32 md:h-32 bg-[#f3f4f6] rounded-full flex items-center justify-center mb-3 transition-colors group-hover:bg-[#e5e7eb] shadow-md">
        {/* Placeholder de Imagem */}
        <img 
          src="public/placeholder.svg" 
          alt={category.name} 
          className="w-1/2 h-1/2 object-contain opacity-70" 
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
          // Mobile: Horizontal scroll (2.5 cards visible)
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <div 
                key={category.slug} 
                // w-[40%] ensures 2.5 items are visible on a standard mobile screen
                className="flex-shrink-0 w-[40%] sm:w-[30%]" 
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        ) : (
          // Desktop/Tablet: Grid layout
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 justify-items-center">
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