import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGallery from "@/components/ProductGallery";
import MobileFooter from "@/components/MobileFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import CategorySection from "@/components/CategorySection";
import IsotelhaHighlightSection from "@/components/IsotelhaHighlightSection"; 
import FooterSecuritySeals from "@/components/FooterSecuritySeals";

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

        {/* Slogan Final */}
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-extrabold text-center text-dark-blue italic">
                "Inovando o futuro, telha por telha."
            </h2>
        </div>
      </main>
      
      <WhatsAppButton />
      <MobileFooter />
      <FooterSecuritySeals />
    </div>
  );
};

export default Index;