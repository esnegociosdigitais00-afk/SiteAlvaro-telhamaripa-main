import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { showSuccess, showError } from '@/utils/toast';

interface ProductForCard {
  id: number;
  name: string;
  image: string;
}

const ProductCard = ({ product }: { product: ProductForCard }) => {
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showSuccess("Link do produto copiado para a área de transferência!");
    } catch (err) {
      showError("Falha ao copiar o link.");
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    const productUrl = `${window.location.origin}/produto/${product.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Confira este produto incrível: ${product.name}`,
          url: productUrl,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          showError("Não foi possível abrir o menu de compartilhamento. Copiando o link.");
          await copyToClipboard(productUrl);
        }
      }
    } else {
      await copyToClipboard(productUrl);
    }
  };

  const renderProductName = () => {
    if (product.id === 1) {
      return (
        <span>
          {product.name.split('Galvalume natural')[0]}
          <span className="text-medium-blue">Galvalume natural</span>
          {product.name.split('Galvalume natural')[1]}
        </span>
      );
    }
    if (product.id === 2) {
      return (
        <span>
          {product.name.split('cor Branco neve')[0]}
          <span className="text-medium-blue">cor Branco neve</span>
          {product.name.split('cor Branco neve')[1]}
        </span>
      );
    }
    if (product.id === 3) {
      const parts = product.name.split('Galvalume Natural');
      const finalParts = parts[1].split('cor Branco Neve');
      return (
        <span>
          {parts[0]}
          <span className="text-medium-blue">Galvalume Natural</span>
          {finalParts[0]}
          <span className="text-medium-blue">cor Branco Neve</span>
          {finalParts[1]}
        </span>
      );
    }
    if (product.id === 4) {
      const parts = product.name.split('Cor branco neve');
      const finalParts = parts[1].split('forro branco neve');
      return (
        <span>
          {parts[0]}
          <span className="text-medium-blue">Cor branco neve</span>
          {finalParts[0]}
          <span className="text-medium-blue">forro branco neve</span>
          {finalParts[1]}
        </span>
      );
    }
    if (product.id === 5) {
      const parts = product.name.split('Cor Branco neve');
      const finalParts = parts[1].split('Forro amadeirado');
      return (
        <span>
          {parts[0]}
          <span className="text-medium-blue">Cor Branco neve</span>
          {finalParts[0]}
          <span className="text-medium-blue">Forro amadeirado</span>
          {finalParts[1]}
        </span>
      );
    }
    return product.name;
  };

  return (
    <Card className="w-full flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-40 flex items-center justify-center p-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md">
            <Scale className="h-4 w-4 text-dark-blue" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md">
            <Heart className="h-4 w-4 text-dark-blue" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-white/80 hover:bg-white rounded-full shadow-md"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 text-dark-blue" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-gray-900 text-center mb-4 flex-grow flex flex-col justify-center">
          {renderProductName()}
        </h3>
        <div>
          <Link to={`/produto/${product.id}`}>
            <Button className="w-full bg-medium-blue hover:bg-medium-blue/90 rounded-lg transition-colors">
              Ver Detalhes
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;