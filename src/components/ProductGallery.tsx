import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const ProductGallery = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6 border-b-4 border-gold inline-block pb-1">
          Produtos em Destaque
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={{
              id: product.id,
              name: product.name,
              image: product.images[0]
            }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;