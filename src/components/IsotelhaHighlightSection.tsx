import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const IsotelhaHighlightSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-blue mb-4 leading-tight">
          Conheça Mais Sobre a Isotelha
        </h2>
        
        <p className="text-lg text-gray-700 mb-8">
          A Isotelha é a solução definitiva para quem busca eficiência térmica e acústica sem abrir mão da estética. Com tecnologia de ponta, ela garante conforto, economia de energia e durabilidade superior para qualquer tipo de construção.
        </p>
        
        <Link to="/produto/1"> {/* Link para um produto de exemplo */}
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-dark-blue font-bold text-base rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] h-12 px-8"
          >
            <Zap className="h-5 w-5 mr-2" />
            Ver Detalhes da Isotelha
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default IsotelhaHighlightSection;