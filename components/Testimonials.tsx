import { Star, Quote } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "5519971193794";

const testimonials = [
  {
    name: "Ana Paula Silva",
    text: "Os doces da Melina transformaram o aniversário da minha filha em um momento mágico! O sabor me lembrou a infância na casa da minha avó. É amor em forma de doce!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    text: "Já fiz várias encomendas e sempre me surpreendo com a qualidade e o carinho em cada detalhe. É uma confeitaria que entende o verdadeiro significado de fazer com amor.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    text: "Descobri a Melina Confeitaria por indicação e não me arrependo! Os brigadeiros são os melhores que já comi, e o atendimento é sempre acolhedor e familiar.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-b from-craft-100 to-craft-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" style={{ color: '#00255F' }}>
            O Que Nossos Clientes{" "}
            <span style={{ color: '#b8a490' }}>Dizem</span>
          </h2>
          <p className="text-lg font-body text-chocolate-700 max-w-2xl mx-auto">
            Cada depoimento é um pedacinho da alegria que sentimos ao compartilhar nossos doces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border"
              style={{ 
                background: 'linear-gradient(135deg, #ebe6dd 0%, #e0d7c9 100%)',
                borderColor: '#d4c5b0'
              }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8" style={{ color: '#8f7054', opacity: 0.4 }} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <p className="font-body text-chocolate-800 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-heading font-semibold" style={{ color: '#00255F' }}>
                  {testimonial.name}
                </p>
                <p className="text-sm font-body text-chocolate-600">
                  Cliente Melina
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-chocolate-700 mb-4">
            Quer fazer parte dessa família?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer minha primeira encomenda.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-white hover:from-chocolate-700 hover:to-chocolate-800 transition-all shadow-lg font-heading font-medium"
          >
            Faça sua Primeira Encomenda
          </a>
        </div>
      </div>
    </section>
  );
}
