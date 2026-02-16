"use client";

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
      className="relative min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(to bottom, #f1eee9, #ffffff, #f1eee9)' }}
    >
      {/* Padrão sutil de fundo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(139, 111, 71, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}/>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Linha decorativa superior */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
          <span className="text-sm uppercase tracking-[0.25em] font-heading" style={{ color: '#d4af37' }}>
            Confeitaria Artesanal
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-thin mb-6 leading-[1.1] tracking-[0.08em] uppercase" style={{ color: '#00255F' }}>
          Melina
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-display tracking-wide" style={{ color: '#5a432b' }}>
          Confeitaria Afetiva
        </p>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4af37' }}></div>
          <div className="w-16 h-px" style={{ background: 'linear-gradient(to right, #d4af37, #f4e5b8, #d4af37)' }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl font-body mb-16 max-w-2xl mx-auto leading-relaxed" style={{ color: '#b8a490' }}>
          Doces que aquecem o coração e resgatam memórias.<br className="hidden sm:block" />
          Cada receita carrega o carinho e a tradição da nossa família para a sua.
        </p>

        {/* Indicador de scroll */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-70 transition-opacity"
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
