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
      className="fixed bottom-6 right-6 z-50 transition-transform duration-300 hover:scale-105"
    >
      <Button 
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl p-0"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white fill-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;