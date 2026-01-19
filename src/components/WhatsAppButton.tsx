import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  // Placeholder para o link do WhatsApp
  const whatsappLink = "https://wa.me/5511999999999"; 

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform duration-300 hover:scale-105 group"
    >
      <Button 
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl p-0 relative overflow-hidden"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Usando MessageCircle como fallback para o ícone do WhatsApp */}
        <MessageCircle className="h-7 w-7 text-white fill-white" />
      </Button>
      
      {/* CTA para desktop/telas maiores */}
      <div className="hidden md:block absolute right-16 top-1/2 transform -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Orçar via WhatsApp
      </div>
    </a>
  );
};

export default WhatsAppButton;