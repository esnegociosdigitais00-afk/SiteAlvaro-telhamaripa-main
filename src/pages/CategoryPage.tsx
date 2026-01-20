import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import MobileFooter from '@/components/MobileFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import FooterSecuritySeals from '@/components/FooterSecuritySeals'; // Importando o novo componente
import { MadeWithDyad } from '@/components/made-with-dyad';
import { cn } from '@/lib/utils';

// Função utilitária para formatar o slug (ex: 'isotelha-trapezoidal' -> 'Isotelha Trapezoidal')
const formatCategoryName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) return <div className="text-center py-20">Categoria não encontrada.</div>;

  const categoryName = formatCategoryName(slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-2 pb-20 md:pb-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 py-4">
          <Link to="/" className="hover:text-medium-blue transition-colors flex items-center">
            <Home className="h-4 w-4 mr-1" />
            Início
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-semibold text-dark-blue">
            {categoryName}
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-dark-blue mb-8 border-b-4 border-gold inline-block pb-1">
          {categoryName}
        </h1>

        {/* Placeholder para listagem de produtos */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-inner">
          <p className="text-center text-gray-600 italic">
            Em breve, você encontrará todos os produtos da categoria "{categoryName}" aqui.
          </p>
          {/* Aqui será implementada a grade de produtos */}
        </div>
        
      </main>
      
      <WhatsAppButton />
      <MobileFooter />
      <FooterSecuritySeals /> {/* Adicionando o selo */}
      <MadeWithDyad />
    </div>
  );
};

export default CategoryPage;