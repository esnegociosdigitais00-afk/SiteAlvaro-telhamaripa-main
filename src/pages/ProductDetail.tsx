import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, MessageCircle, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import MobileFooter from '@/components/MobileFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductRelatedCarousel from '@/components/ProductRelatedCarousel';
import ProductFullDescriptionSection from '@/components/ProductFullDescriptionSection'; 
import FooterSecuritySeals from '@/components/FooterSecuritySeals'; // Importando o novo componente
import { MadeWithDyad } from '@/components/made-with-dyad';
import { useIsMobile } from '@/hooks/use-mobile';

// --- Mock Data Sincronizado com a Home ---
const mockProduct = {
  id: 1,
  name: "Isotelha Trapezoidal Térmica Sanduíche Galvalume SEM FORRO– núcleo em PIR 30 mm",
  ref: "0001821",
  category: "Telhas Térmicas",
  descriptionShort: "A Isotelha Trapezoidal Sanduíche SEM FORRO é a solução ideal para coberturas que exigem alto desempenho térmico e acústico com um acabamento interno mais simples. Com núcleo isolante em PIR de 30mm, garante eficiência energética e conforto.",
  descriptionLong: "Projetada para galpões, indústrias e comércios, esta telha combina a resistência do aço galvalume com o poder isolante do PIR (Poliisocianurato). O modelo sem forro é uma opção econômica que não abre mão da qualidade e do isolamento. O núcleo em PIR é retardante a chamas, oferecendo maior segurança para sua construção. A instalação é prática e rápida, otimizando o tempo da sua obra.",
  images: [
    "/isotelha-sem-forro.png",
    "/isotelha-sem-forro.png",
    "/isotelha-sem-forro.png",
    "/isotelha-sem-forro.png",
    "/isotelha-sem-forro.png",
  ],
  specs: [
    "Núcleo isolante em PIR de 30mm",
    "Modelo Trapezoidal Sanduíche",
    "Face superior em aço galvalume",
    "Sem forro na face inferior (acabamento simples)",
    "Excelente isolamento térmico e acústico",
    "Material retardante a chamas",
  ]
};

// --- Components ---

const Breadcrumb = ({ product }: { product: typeof mockProduct }) => (
  <nav className="flex items-center text-sm text-gray-500 py-4">
    <Link to="/" className="hover:text-medium-blue transition-colors flex items-center">
      <Home className="h-4 w-4 mr-1" />
      Início
    </Link>
    <ChevronRight className="h-4 w-4 mx-2" />
    <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-medium-blue transition-colors">
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

const ProductDescription = ({ product }: { product: typeof mockProduct }) => {
  // Removendo a lógica de expansão, pois a descrição completa será exibida em uma seção separada abaixo.
  return (
    <div className="text-gray-700 text-base space-y-3">
      <p>{product.descriptionShort}</p>
      {/* Adicionando um link para a seção completa, se necessário, ou apenas mantendo o resumo */}
      <a href="#descricao-completa" className="text-medium-blue hover:text-dark-blue font-medium text-sm block mt-2">
        Leia a descrição completa abaixo
      </a>
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
  const product = mockProduct;
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-2 pb-20 md:pb-10">
        <Breadcrumb product={product} />

        {/* Layout Principal */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mt-4">
          
          {/* Coluna Esquerda (Galeria de Imagens) - 40% em desktop */}
          <div className="lg:col-span-2">
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Coluna Direita (Detalhes e CTA) - 60% em desktop */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Informações do Produto */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-dark-blue leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                REF: {product.ref}
              </p>
            </div>

            {/* Descrição Curta */}
            <ProductDescription product={product} />

            {/* Botão de Ação (Desktop) */}
            <div className="hidden md:block pt-4">
              <WhatsAppCtaButton productName={product.name} productRef={product.ref} />
            </div>

            {/* Especificações Técnicas */}
            <TechnicalSpecs specs={product.specs} />
          </div>
        </div>
        
        {/* Seção de Descrição Completa (Full Width) */}
        <ProductFullDescriptionSection description={product.descriptionLong} />

        {/* Produtos Relacionados */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6 border-b-4 border-gold inline-block pb-1">
            Produtos Relacionados
          </h2>
          <ProductRelatedCarousel />
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
      <FooterSecuritySeals /> {/* Adicionando o selo */}
      <MadeWithDyad />
    </div>
  );
};

export default ProductDetail;