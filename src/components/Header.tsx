import React from 'react';
import { Menu, Search, User, ShoppingCart, ChevronLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

// Componente do Logo (Leão Dourado e Texto Azul)
const Logo = () => (
  <div className="flex items-center space-x-1">
    {/* Leão Dourado (Placeholder) */}
    <span className="text-gold text-2xl font-serif">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L15 5H9L12 1Z" fill="currentColor"/>
        <path d="M18 6C18 9.31371 15.3137 12 12 12C8.68629 12 6 9.31371 6 6C6 2.68629 8.68629 0 12 0C15.3137 0 18 2.68629 18 6Z" fill="currentColor" transform="translate(3 10)"/>
      </svg>
    </span>
    {/* Texto Azul */}
    <span className="text-medium-blue font-extrabold text-xl tracking-tight">
      CONSTRUÇÃO
    </span>
  </div>
);

// Componente da Barra de Busca
const SearchBar = ({ className }: { className?: string }) => (
  <div className={cn("relative flex-1 max-w-lg", className)}>
    <Input
      type="text"
      placeholder="Buscar no site"
      className="w-full rounded-full pl-4 pr-10 h-10 border-2 border-medium-blue focus:border-medium-blue/80 transition-all"
    />
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-medium-blue" />
  </div>
);

// Componente do Menu Hambúrguer (Sidebar)
const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
        <Menu className="h-6 w-6 text-dark-blue" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-[250px] sm:w-[300px] p-0">
      <div className="flex flex-col h-full">
        <div className="bg-dark-blue p-4 flex items-center justify-between">
          <Logo />
          <Button variant="ghost" size="icon" className="text-white hover:bg-dark-blue/80">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a href="#" className="py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Início</a>
          <a href="#" className="py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Produtos</a>
          <a href="#" className="py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Ofertas</a>
          <a href="#" className="py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">Contato</a>
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
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Menu Hambúrguer (Mobile) / Placeholder (Desktop) */}
        <div className="flex items-center">
          <MobileMenu />
          {/* Menu Desktop (Placeholder para links de navegação) */}
          <nav className="hidden lg:flex space-x-6 text-dark-blue font-medium">
            <a href="#" className="hover:text-medium-blue transition-colors">Início</a>
            <a href="#" className="hover:text-medium-blue transition-colors">Categorias</a>
            <a href="#" className="hover:text-medium-blue transition-colors">Ofertas</a>
          </nav>
        </div>

        {/* Logo Centralizada */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Barra de Busca (Desktop) */}
        <SearchBar className="hidden lg:flex flex-1 mx-8" />

        {/* Ícones de Ação (Usuário e Carrinho) */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full hidden sm:flex">
            <User className="h-6 w-6 text-dark-blue" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <ShoppingCart className="h-6 w-6 text-dark-blue" />
            {/* Badge do Carrinho */}
            <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center transform translate-x-1 -translate-y-1">
              0
            </span>
          </Button>
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