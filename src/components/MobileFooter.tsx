import React from 'react';
import { Menu, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileFooter = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="flex justify-around items-center h-14">
        
        <Button variant="ghost" className="flex flex-col items-center text-dark-blue/80 hover:text-medium-blue h-full rounded-none">
          <Menu className="h-5 w-5" />
          <span className="text-xs mt-0.5">Menu</span>
        </Button>

        <Button variant="ghost" className="flex flex-col items-center text-dark-blue/80 hover:text-medium-blue h-full rounded-none">
          <Search className="h-5 w-5" />
          <span className="text-xs mt-0.5">Busca</span>
        </Button>

        <Button variant="ghost" className="flex flex-col items-center text-dark-blue/80 hover:text-medium-blue h-full rounded-none">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-xs mt-0.5">Voltar</span>
        </Button>
      </div>
    </footer>
  );
};

export default MobileFooter;