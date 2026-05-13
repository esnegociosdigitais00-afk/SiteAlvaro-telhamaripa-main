import React from 'react';

const IsotelhaHighlightSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          {/* Coluna de Texto (2/3) */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-blue mb-6 border-b-4 border-gold inline-block pb-1">
              Quem Somos
            </h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                Bem-vindo à Telhas Sanduiche Maripá, sua parceira em conforto e inovação. Sabemos que o clima do Rio pede soluções inteligentes, e é por isso que nos dedicamos a oferecer o melhor em telhas térmicas e acessórios para sua obra.
              </p>
              <p>
                Nossa trajetória é pautada pelo compromisso de transformar ambientes. Seja para uma residência que busca refrescar os dias de verão ou para um galpão comercial que precisa de silêncio e proteção, a Telhas Sanduiche Maripá oferece produtos que unem resistência e design. Mais do que vender telhas, entregamos tranquilidade e a certeza de um investimento que valoriza o seu patrimônio.
              </p>
            </div>
          </div>
          
          {/* Coluna de Mosaico de Imagens (1/3) */}
          <div className="md:col-span-1 grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/empresa-frente.jpeg" alt="Frente da loja Telhas Sanduiche Maripá" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/empresa-estoque.webp" alt="Estoque de telhas" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/empresa-carregamento.webp" alt="Carregamento de telhas no caminhão" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/empresa-caminhao.webp" alt="Caminhão com telhas" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IsotelhaHighlightSection;