import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGallery from "@/components/ProductGallery";
import MobileFooter from "@/components/MobileFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import CategorySection from "@/components/CategorySection";
import IsotelhaHighlightSection from "@/components/IsotelhaHighlightSection"; // Importando novo componente
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pb-16 md:pb-0"> {/* Padding bottom para compensar o MobileFooter */}
        <HeroCarousel />
        <CategorySection />
        <ProductGallery />
        
        {/* Seção de Destaque da Isotelha */}
        <IsotelhaHighlightSection />

        {/* Adicionar mais conteúdo aqui, como categorias, informações da empresa, etc. */}
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-xl font-semibold text-center text-gray-600">
                Construindo o futuro, tijolo por tijolo.
            </h2>
        </div>
      </main>
      
      <WhatsAppButton />
      <MobileFooter />
      <MadeWithDyad />
    </div>
  );
};

export default Index;