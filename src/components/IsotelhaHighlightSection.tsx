import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const IsotelhaHighlightSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-blue mb-4 leading-tight">
          Quem Somos
        </h2>
        
        <div className="text-lg text-gray-700 mb-8 space-y-4">
          <p>
            Bem-vindo à Isotelha RJ, sua parceira em conforto e inovação. Sabemos que o clima do Rio pede soluções inteligentes, e é por isso que nos dedicamos a oferecer o melhor em telhas térmicas e acessórios para sua obra.
          </p>
          <p>
            Nossa trajetória é pautada pelo compromisso de transformar ambientes. Seja para uma residência que busca refrescar os dias de verão ou para um galpão comercial que precisa de silêncio e proteção, a Isotelha RJ oferece produtos que unem resistência e design. Mais do que vender telhas, entregamos tranquilidade e a certeza de um investimento que valoriza o seu patrimônio.
          </p>
        </div>
        
        {/* Botão removido conforme solicitado anteriormente */}
      </div>
    </section>
  );
};

export default IsotelhaHighlightSection;