import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Home, ChevronRight, MessageCircle, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import MobileFooter from '@/components/MobileFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductRelatedCarousel from '@/components/ProductRelatedCarousel';
import FooterSecuritySeals from '@/components/FooterSecuritySeals';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { useIsMobile } from '@/hooks/use-mobile';
import { products, Product } from '@/data/products';

// --- Components ---

const Breadcrumb = ({ product }: { product: Product }) => (
  <nav className="flex items-center text-sm text-gray-500 py-4">
    <Link to="/" className="hover:text-medium-blue transition-colors flex items-center">
      <Home className="h-4 w-4 mr-1" />
      Início
    </Link>
    <ChevronRight className="h-4 w-4 mx-2" />
    <Link to={`/categoria/${product.categorySlug}`} className="hover:text-medium-blue transition-colors">
      {product.category}
    </Link>
    <ChevronRight className="h-4 w-4 mx-2" />
    <span className="font-semibold text-dark-blue truncate max-w-[150px] sm:max-w-none">
      {product.name}
    </span>
  </nav>
);

const WhatsAppCtaButton = ({ productName, productRef }: { productName: string, productRef: string }) => {
  const whatsappNumber = "5521967343475";
  const message = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para: ${productName} - Ref: ${productRef}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full block">
      <Button 
        className="w-full h-14 text-lg font-bold bg-green-500 hover:bg-green-600 rounded-xl shadow-lg transition-colors"
      >
        <MessageCircle className="h-6 w-6 mr-3 fill-white" />
        ORÇAR VIA WHATSAPP
      </Button>
    </a>
  );
};

const ProductDescription = ({ product }: { product: Product }) => {
  return (
    <div className="text-gray-700 text-base space-y-3">
      <p>{product.descriptionShort}</p>
    </div>
  );
};

const TechnicalSpecs = ({ specs }: { specs: string[] }) => (
  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
    <h3 className="text-xl font-bold text-dark-blue mb-4">
      Especificações Técnicas
    </h3>
    <ul className="space-y-2">
      {specs.map((spec, index) => (
        <li key={index} className="flex items-start text-gray-700">
          <CheckCircle className="h-5 w-5 text-medium-blue flex-shrink-0 mr-2 mt-0.5" />
          <span>{spec}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Page Component ---

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const isMobile = useIsMobile();

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const renderProductName = () => {
    if (product.id === 1) {
      return (
        <span>
          {product.name.split('Galvalume natural')[0]}
          <span className="text-medium-blue">Galvalume natural</span>
          {product.name.split('Galvalume natural')[1]}
        </span>
      );
    }
    if (product.id === 2) {
      return (
        <span>
          {product.name.split('cor Branco neve')[0]}
          <span className="text-medium-blue">cor Branco neve</span>
          {product.name.split('cor Branco neve')[1]}
        </span>
      );
    }
    if (product.id === 3) {
      const parts = product.name.split('Galvalume Natural');
      const finalParts = parts[1].split('cor Branco Neve');
      return (
        <span>
          {parts[0]}
          <span className="text-medium-blue">Galvalume Natural</span>
          {finalParts[0]}
          <span className="text-medium-blue">cor Branco Neve</span>
          {finalParts[1]}
        </span>
      );
    }
    if (product.id === 4) {
      const parts = product.name.split('Cor branco neve');
      const finalParts = parts[1].split('forro branco neve');
      return (
        <span>
          {parts[0]}
          <span className="text-medium-blue">Cor branco neve</span>
          {finalParts[0]}
          <span className="text-medium-blue">forro branco neve</span>
          {finalParts[1]}
        </span>
      );
    }
    if (product.id === 5) {
      const parts = product.name.split('Cor Branco neve');
      const finalParts = parts[1].split('Forro amadeirado');
      return (
        <span>
          {parts[0]}
          <span className="text-medium-blue">Cor Branco neve</span>
          {finalParts[0]}
          <span className="text-medium-blue">Forro amadeirado</span>
          {finalParts[1]}
        </span>
      );
    }
    return product.name;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-2 pb-20 md:pb-10">
        <Breadcrumb product={product} />

        {/* Layout Principal */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mt-4">
          
          {/* Coluna Esquerda (Galeria de Imagens) */}
          <div className="lg:col-span-2">
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Coluna Direita (Detalhes e CTA) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Informações do Produto */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                {renderProductName()}
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                REF: {product.ref}
              </p>
            </div>

            {/* Descrição Curta */}
            <ProductDescription product={product} />

            {/* Disclaimer para o produto 6 */}
            {product.id === 6 && (
              <p className="text-sm text-gray-600 italic pt-2">
                *Opções de cores disponíveis.
              </p>
            )}

            {/* Botão de Ação (Desktop) */}
            <div className="hidden md:block pt-4">
              <WhatsAppCtaButton productName={product.name} productRef={product.ref} />
            </div>

            {/* Especificações Técnicas */}
            <TechnicalSpecs specs={product.specs} />
          </div>
        </div>
        
        {/* Produtos Relacionados */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6 border-b-4 border-gold inline-block pb-1">
            Complete seu projeto: {product.category}
          </h2>
          <ProductRelatedCarousel 
            categorySlug={product.categorySlug} 
            currentProductId={product.id} 
          />
        </section>
      </main>
      
      {/* Botão Fixo Mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t shadow-2xl md:hidden">
          <WhatsAppCtaButton productName={product.name} productRef={product.ref} />
        </div>
      )}

      <WhatsAppButton />
      <MobileFooter />
      <FooterSecuritySeals />
      <MadeWithDyad />
    </div>
  );
};

export default ProductDetail;