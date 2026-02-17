const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "5519971193794";

const images = [
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283317/WhatsApp_Image_2026-02-16_at_18.55.33_gfgc3s.jpg",
    alt: "Doces e Bolos Festivos",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283318/WhatsApp_Image_2026-02-16_at_18.55.27_cxlnpv.jpg",
    alt: "Presentes e Mimos",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283316/WhatsApp_Image_2026-02-16_at_18.55.36_g8ozht.jpg",
    alt: "Bolos para o Dia-a-Dia",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283938/WhatsApp_Image_2026-02-16_at_20.18.24_ee5lav.jpg",
    alt: "Cookies",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283842/WhatsApp_Image_2026-02-16_at_17.16.53_cadipk.jpg",
    alt: "Bolos Especiais",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283316/WhatsApp_Image_2026-02-16_at_18.55.37_lybc7t.jpg",
    alt: "Docinhos",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771284313/WhatsApp_Image_2026-02-16_at_20.24.42_xeiyav.jpg",
    alt: "Bolos Interativos",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771284315/WhatsApp_Image_2026-02-16_at_18.24.33_a0dshj.jpg",
    alt: "Bolos Caseiros",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771284539/WhatsApp_Image_2026-02-16_at_20.28.17_rgzllx.jpg",
    alt: "Bolos Personalizados",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" style={{ color: '#00255F' }}>
            Galeria
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
