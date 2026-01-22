import React from 'react';
import { Menu, Search, User, ChevronLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom'; // Importando Link

// Componente do Logo (Usando a imagem fornecida)
const Logo = () => (
  <Link to="/" className="flex items-center">
    <img 
      src="/logo_isotelhas_rj_new.png" 
      alt="Isotelhas RJ - Conforto que Protege" 
      // Logo responsivo: 100px em mobile, 150px em sm, 350px em lg
      className="h-[100px] sm:h-[150px] lg:h-[350px] w-auto" 
    />
  </Link>
);

// Componente da Barra de Busca
const SearchBar = ({ className }: { className?: string }) => (
  <div className={cn("relative flex-1 max-w-xl", className)}> {/* Alterado de max-w-3xl para max-w-xl */}
    <Input
      type="text"
      placeholder="Buscar no site"
      className="w-full rounded-full pl-4 pr-10 h-10 border-2 border-medium-blue focus:border-medium-blue/80 transition-all bg-gray-50"
    />
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-medium-blue" />
  </div>
);

// Componente do Menu Hambúrguer (Sidebar)
const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Menu className="h-6 w-6 text-dark-blue" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-[250px] sm:w-[300px] p-0">
      <div className="flex flex-col h-full">
        <div className="bg-dark-blue p-4 flex items-center justify-between">
          <Logo />
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-dark-blue/80">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </SheetTrigger>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link to="/" className="py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Início</Link>
          <Link to="/contato" className="py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Contato</Link>
        </nav>
      </div>
    </SheetContent>
  </Sheet>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Barra Superior de Vendas */}
      <div className="bg-dark-blue text-white text-center py-2 text-sm font-medium">
        Vendas: 0800 747 1001
      </div>

      {/* Barra Principal de Navegação e Busca */}
      <div className="container mx-auto px-4 py-1 flex items-center justify-between gap-4">
        
        {/* 1. Logo e Link Início (Esquerda) */}
        <div className="flex items-center space-x-6 flex-shrink-0">
          <Logo />
          {/* Link Início Desktop */}
          <nav className="hidden lg:block text-dark-blue font-medium">
            <Link to="/" className="hover:text-medium-blue transition-colors whitespace-nowrap">Início</Link>
          </nav>
        </div>

        {/* 2. Centro (Barra de Busca Desktop) */}
        {/* Removendo mx-8 para permitir que o flexbox centralize melhor o item menor */}
        <SearchBar className="hidden lg:flex flex-1" /> 

        {/* 3. Ícones de Ação (Usuário e Menu Mobile) */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Ícone de Usuário (Desktop/Tablet) */}
          <Button variant="ghost" size="icon" className="rounded-full hidden sm:flex">
            <User className="h-6 w-6 text-dark-blue" />
          </Button>
          
          {/* Menu Hambúrguer (Mobile/Tablet) */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
      
      {/* Barra de Busca (Mobile) */}
      <div className="lg:hidden px-4 pb-3">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;