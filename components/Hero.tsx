const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/seu-link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-warmBeige-50 to-amber-50 dark:from-slate-900 dark:via-rose-950 dark:to-amber-950"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(251, 113, 133, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}/>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium mb-4">
            ❤️ Feito com amor e tradição
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Melina{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-600 dark:from-rose-400 dark:to-amber-400">
            Confeitaria Afetiva
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Doces que aquecem o coração e resgatam memórias. Cada receita carrega o carinho e a tradição da nossa família para a sua.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:from-rose-600 hover:to-rose-700 dark:from-rose-500 dark:to-rose-600 dark:hover:from-rose-600 dark:hover:to-rose-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Faça sua Encomenda
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-rose-500 text-rose-600 hover:bg-rose-50 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-950/30 transition-all"
          >
            Nossa História
          </a>
        </div>
      </div>
    </section>
  );
}
