const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/seu-link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-craft-100 via-craft-50 to-amber-50"
    >
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(139, 111, 71, 0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}/>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-chocolate-100 text-chocolate-700 rounded-full text-sm font-medium mb-4">
            ❤️ Feito com amor e tradição
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-chocolate-900 mb-6 leading-tight">
          Melina{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-chocolate-600 to-amber-600">
            Confeitaria Afetiva
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-chocolate-800 mb-8 max-w-3xl mx-auto">
          Doces que aquecem o coração e resgatam memórias. Cada receita carrega o carinho e a tradição da nossa família para a sua.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#galeria"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-white hover:from-chocolate-700 hover:to-chocolate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            📖 Ver Cardápio
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Faça sua Encomenda
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-chocolate-600 text-chocolate-700 hover:bg-chocolate-50 transition-all"
          >
            Nossa História
          </a>
        </div>
      </div>
    </section>
  );
}
