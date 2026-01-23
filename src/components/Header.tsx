import React from 'react';
import { Menu, Search, User, ChevronLeft, Phone, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon';

// Componente do Logo (Usando a imagem fornecida)
const Logo = () => (
  <Link to="/" className="flex items-center">
    <img 
      src="/logo_isotelhas_rj_new_v2.png" 
      alt="Isotelhas RJ - Conforto que Protege" 
      // Altura responsiva: h-20 em mobile, h-24 em telas grandes para um logo bem maior
      className="h-20 lg:h-24 w-auto" 
    />
  </Link>
);

// Componente da Barra de Busca
const SearchBar = ({ className }: { className?: string }) => (
  <div className={cn("relative flex-1 max-w-xl", className)}>
    <Input
      type="text"
      placeholder="Buscar no site"
      className="w-full rounded-full pl-4 pr-10 h-10 border-2 border-medium-blue focus:border-medium-blue/80 transition-all bg-gray-50"
    />
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-medium-blue" />
  </div>
);

// Componente do Menu Hambúrguer (Sidebar)
const MobileMenu = () => {
  const whatsappLink = "https://wa.me/5521967343475?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informações.";
  const phoneLink = "tel:21967343475";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-6 w-6 text-dark-blue" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] p-0">
        <div className="flex flex-col h-full">
          <div className="bg-white p-4 flex items-center justify-between border-b">
            <Logo />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-dark-blue hover:bg-gray-100">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          </div>
          <nav className="flex flex-col p-4 space-y-1">
            <Link to="/" className="py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-gray-800">Início</Link>
            
            <Collapsible>
              <CollapsibleTrigger className="flex justify-between items-center w-full py-3 px-3 rounded-lg hover:bg-gray-100 data-[state=open]:bg-gray-100 transition-colors font-medium text-gray-800">
                <span>Contato</span>
                <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pt-2 space-y-2">
                <a href={phoneLink} className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
                  <Phone className="h-5 w-5 text-medium-blue" />
                  <span>Ligar Agora</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
                  <WhatsAppIcon className="h-5 w-5 text-green-500" />
                  <span>Orçar via WhatsApp</span>
                </a>
              </CollapsibleContent>
            </Collapsible>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Barra Superior de Vendas */}
      <div className="bg-dark-blue text-white text-center py-2 text-sm font-medium">
        Vendas: (21) 9 6734-3475
      </div>

      {/* Barra Principal de Navegação e Busca */}
      <div className="px-4 py-0 flex items-center justify-between gap-4">
        
        {/* 1. Logo (Esquerda) */}
        <div className="flex items-center flex-shrink-0">
          <Logo />
        </div>

        {/* 2. Centro (Início e Barra de Busca Desktop) */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
          {/* Link Início Desktop */}
          <nav className="text-dark-blue font-medium">
            <Link to="/" className="hover:text-medium-blue transition-colors whitespace-nowrap">Início</Link>
          </nav>
          <SearchBar />
        </div>

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
      <div className="lg:hidden px-4 pb-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;