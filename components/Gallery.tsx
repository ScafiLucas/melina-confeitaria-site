const images = [
  {
    url: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&auto=format&fit=crop",
    alt: "Bolo de chocolate artesanal",
  },
  {
    url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&auto=format&fit=crop",
    alt: "Brigadeiros gourmet sortidos",
  },
  {
    url: "https://images.unsplash.com/photo-1586985289906-406988974504?w=800&auto=format&fit=crop",
    alt: "Cupcakes decorados com carinho",
  },
  {
    url: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=800&auto=format&fit=crop",
    alt: "Torta de frutas caseira",
  },
  {
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop",
    alt: "Doces finos para festas",
  },
  {
    url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop",
    alt: "Bolo de aniversário personalizado",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 bg-gradient-to-b from-warmBeige-50 to-rose-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-4xl">🧁</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Doces Feitos com{" "}
            <span className="text-rose-500 dark:text-rose-400">Amor</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Cada criação é única e especial. Confira alguns dos nossos doces que levam 
            afeto e sabor para momentos inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-rose-100 dark:bg-rose-900 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-center">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 italic">
            ✨ Trabalhamos com encomendas personalizadas para tornar seu momento ainda mais especial
          </p>
        </div>
      </div>
    </section>
  );
}
