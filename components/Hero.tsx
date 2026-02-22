"use client";

import { BookOpen } from "lucide-react";
import Image from "next/image";
import { siteImages } from "@/data/site-images";
// Para trocar imagens desta seção, edite data/site-images.ts

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "5519971193794";
const MENU_PDF_URL = process.env.NEXT_PUBLIC_MENU_PDF || "https://drive.google.com/file/d/1-GtNKvm6eE5LyF66_FqfvavmEEftbppd/view";

// Converte link do Google Drive para visualização direta
const getDirectPdfUrl = (driveUrl: string) => {
  const fileIdMatch = driveUrl.match(/\/d\/([^/]+)/);
  if (fileIdMatch) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  return driveUrl;
};

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-4rem)] md:min-h-screen flex items-start md:items-center justify-center bg-white"
    >
      {/* Imagem de fundo (edite em data/site-images.ts -> heroBackground) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${siteImages.heroBackground}')`,
          opacity: 0.25
        }}
      />
      
      {/* Máscara de fade lateral (radial do centro para as bordas) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at center, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.7) 70%, white 100%)'
        }}
      />
      
      <div className="relative z-10 container-fluid px-4 sm:px-6 lg:px-8 pt-8 pb-4 md:py-24 text-center">
        {/* Linha decorativa superior - menos espaço no mobile */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8942e]"></div>
          <span className="text-sm uppercase tracking-[0.25em] font-heading" style={{ color: '#b8942e' }}>
            Cozinha Artesanal
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8942e]"></div>
        </div>
        
        <h1 className="text-fluid-hero font-heading font-thin mb-4 md:mb-6 leading-[1.1] tracking-[0.08em] uppercase" style={{ color: '#00255F' }}>
          Melina
        </h1>
        
        <p className="text-fluid-display mb-5 md:mb-8 font-display tracking-wide" style={{ color: '#5a432b' }}>
          Confeitaria Afetiva
        </p>

        {/* Separador decorativo (edite em data/site-images.ts -> heroDivider) */}
        <div className="flex items-center justify-center mb-4 md:mb-10">
          <Image
            src={siteImages.heroDivider}
            alt="Separador decorativo"
            width={200}
            height={20}
            className="object-contain w-[130px] md:w-[clamp(150px,15vw,200px)]"
          />
        </div>
        
        <p className="text-fluid-body font-body mb-4 md:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#8f7a65' }}>
          Doces que aquecem o coração e resgatam memórias.<br className="hidden sm:block" />
          Cada receita carrega o carinho e a tradição da nossa família para a sua.
        </p>

        {/* Botões de ação - sempre visíveis na tela inicial mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-0 md:mb-3">
          <a
            href={getDirectPdfUrl(MENU_PDF_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-[min(280px,92%)] sm:w-auto items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 hover:bg-chocolate-50 transition-all font-heading font-medium shadow-sm"
            style={{ borderColor: '#00255F', color: '#00255F' }}
          >
            <BookOpen size={18} />
            Ver Cardápio
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma encomenda.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-[min(280px,92%)] sm:w-auto items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-white hover:from-chocolate-700 hover:to-chocolate-800 transition-all font-heading font-medium shadow-md"
          >
            Encomendar
          </a>
        </div>

        {/* Indicador de scroll - só no desktop, mobile não mostra */}
        <button 
          onClick={scrollToNext}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Rolar para próxima seção"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="#b8a490" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
