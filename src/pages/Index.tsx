import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGallery from "@/components/ProductGallery";
import MobileFooter from "@/components/MobileFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import CategorySection from "@/components/CategorySection";
import IsotelhaHighlightSection from "@/components/IsotelhaHighlightSection"; 
import FooterSecuritySeals from "@/components/FooterSecuritySeals"; // Importando o novo componente
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pb-16 md:pb-0"> {/* Padding bottom para compensar o MobileFooter */}
        <div>
          <HeroCarousel />
        </div>
        <CategorySection />
        <ProductGallery />
        
        {/* Seção de Destaque da Isotelha */}
        <IsotelhaHighlightSection />

        {/* Slogan Final - Espaçamento aumentado (py-16) */}
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-2xl font-extrabold text-center text-dark-blue italic">
                "Inovando o futuro, telha por telha."
            </h2>
        </div>
      </main>
      
      <WhatsAppButton />
      <MobileFooter />
      <FooterSecuritySeals /> {/* Adicionando o selo */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;