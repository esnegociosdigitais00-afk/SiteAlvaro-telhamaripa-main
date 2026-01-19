import React from 'react';

interface ProductFullDescriptionSectionProps {
  description: string;
}

const ProductFullDescriptionSection: React.FC<ProductFullDescriptionSectionProps> = ({ description }) => {
  return (
    <section className="mt-12 pt-6 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-4 border-b-4 border-gold inline-block pb-1">
        Descrição Completa do Produto
      </h2>
      <div className="text-gray-700 text-base leading-relaxed space-y-4">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ProductFullDescriptionSection;