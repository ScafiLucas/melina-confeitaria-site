import { Star, Quote } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "5519971193794";

const testimonials = [
  {
    name: "Cilene Mourão",
    text: "O bolo de laranja da Melina foi pra casa da irmã e virou festa,\nporque a Carolzinha aproveitou o café pra anunciar que vem bebê!\nA família amou tudo e sentiu o carinho em cada garfada dada.\nVocês estão no caminho certo, o afeto transborda no trabalho.",
    rating: 5,
  },
  {
    name: "PE Leonardo",
    text: "O padre que morou na Itália provou e disse: é igualzinho ao bolo europeu! Aquele toque de limão azedinho e pouco açúcar que a gente precisava aprender. Não é enjoado, é daqueles que você come e dá vontade de comer mais e mais. A Aline subiu de nível, virou boleira italiana, foi um espetáculo de feedback!",
    rating: 5,
  },
  {
    name: "Paula Moraes",
    text: "Oi Melina!! Tudo bem?! passando pra dizer que estava tudo uma delícia mesmo!!! Achamos o bolo de café maravilhoso, os docinhos, o cookie!! Parabéns, você é muito talentosa e dá pra ver que tem muito amor em tudo!",
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
          <p className="text-lg font-body text-chocolate-700 max-w-3xl mx-auto">
            Depoimentos de quem já provou nosso carinho em forma de doce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border flex flex-col"
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

              <p className="font-body text-chocolate-800 mb-6 italic whitespace-pre-line flex-1">
                "{testimonial.text}"
              </p>

              <div className="mt-auto">
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
