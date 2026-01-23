import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, LayoutGrid, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { categories } from '@/data/categories';

const MobileFooter = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  if (!isMobile) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="flex justify-around items-center h-14">
        
        {/* Botão Início */}
        <Link to="/" className="flex-1">
          <Button variant="ghost" className="flex flex-col items-center text-dark-blue/80 hover:text-medium-blue h-full w-full rounded-none">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-0.5">Início</span>
          </Button>
        </Link>

        {/* Botão Categorias (com Drawer) */}
        <Drawer>
          <DrawerTrigger asChild className="flex-1">
            <Button variant="ghost" className="flex flex-col items-center text-dark-blue/80 hover:text-medium-blue h-full w-full rounded-none">
              <LayoutGrid className="h-5 w-5" />
              <span className="text-xs mt-0.5">Categorias</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-center text-dark-blue">Nossas Categorias</DrawerTitle>
            </DrawerHeader>
            <nav className="p-4">
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link 
                      to={`/categoria/${category.slug}`}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img src={category.image} alt={category.name} className="w-10 h-10 object-contain mr-4" />
                      <span className="font-medium text-gray-800">{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerContent>
        </Drawer>

        {/* Botão Voltar */}
        <div className="flex-1">
          <Button 
            variant="ghost" 
            className="flex flex-col items-center text-dark-blue/80 hover:text-medium-blue h-full w-full rounded-none"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-xs mt-0.5">Voltar</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;