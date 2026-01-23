import React from 'react';
import { ShieldCheck } from 'lucide-react';

const FooterSecuritySeals: React.FC = () => {
  return (
    <section className="bg-white py-8 border-t border-gray-100 pb-20 md:pb-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold text-green-600 mb-6">
          Selos de Segurança
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          
          {/* Selo 1: Compra Segura / Site Protegido */}
          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-12 w-12 text-green-500 fill-green-100" />
            <div className="text-left">
              <p className="text-xs font-medium text-gray-500 uppercase leading-none">Compra Segura</p>
              <p className="text-lg font-extrabold text-dark-blue leading-tight">SITE PROTEGIDO</p>
              <p className="text-xs font-medium text-gray-500 uppercase leading-none">Certificado SSL</p>
            </div>
          </div>

          {/* Selo 2: Safe Browsing Google */}
          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-12 w-12 text-green-500 fill-green-100" />
            <div className="text-left">
              <p className="text-xs font-medium text-gray-500 uppercase leading-none">Safe Browsing</p>
              <p className="text-2xl font-bold text-dark-blue leading-tight">
                <span className="text-blue-600">G</span>
                <span className="text-red-600">o</span>
                <span className="text-yellow-600">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-600">l</span>
                <span className="text-red-600">e</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FooterSecuritySeals;