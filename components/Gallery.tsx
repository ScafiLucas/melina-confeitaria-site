const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "5519971193794";

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
      className="py-20 bg-gradient-to-b from-craft-100 to-craft-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" style={{ color: '#00255F' }}>
            Galeria de{" "}
            <span style={{ color: '#b8a490' }}>Delícias</span>
          </h2>
          <p className="text-lg font-body text-chocolate-700 max-w-2xl mx-auto">
            Cada criação é única e especial. Confira alguns dos nossos doces que levam 
            afeto e sabor para momentos inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-chocolate-100 hover:shadow-2xl transition-all duration-300 border-2 border-chocolate-200"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/80 via-chocolate-900/0 to-chocolate-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-center">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-chocolate-600 italic mb-6">
            Trabalhamos com encomendas personalizadas para tornar seu momento ainda mais especial
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma encomenda personalizada.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-chocolate-600 text-white hover:bg-chocolate-700 transition-all shadow-lg font-heading font-medium"
          >
            Fazer Encomenda Personalizada
          </a>
        </div>
      </div>
    </section>
  );
}
