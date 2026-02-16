import { Star, Quote } from "lucide-react";

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
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-4xl">💖</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            O Que Nossos Clientes{" "}
            <span className="text-rose-500 dark:text-rose-400">Dizem</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Cada depoimento é um pedacinho da alegria que sentimos ao compartilhar nossos doces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-rose-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-rose-200 dark:text-rose-900" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Cliente Melina
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Quer fazer parte dessa família? ❤️
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg font-medium"
          >
            Faça sua Primeira Encomenda
          </a>
        </div>
      </div>
    </section>
  );
}
