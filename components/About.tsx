import { Heart, Home, Cookie, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    text: "Receitas de família passadas com amor através de gerações"
  },
  {
    icon: Home,
    text: "Ambiente acolhedor e produção artesanal caseira"
  },
  {
    icon: Cookie,
    text: "Ingredientes selecionados e de qualidade premium"
  },
  {
    icon: Sparkles,
    text: "Cada doce é feito com atenção especial aos detalhes"
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-chocolate-900 mb-6">
              Nossa História de{" "}
              <span className="text-chocolate-600">Afeto</span>
            </h2>
            <p className="text-lg text-chocolate-700 mb-6">
              A Melina Confeitaria nasceu do desejo de compartilhar o sabor das receitas que sempre 
              trouxeram alegria e união para nossa família. Cada doce que preparamos carrega consigo 
              memórias afetivas, o aroma da casa da vovó e o carinho de quem cozinha com o coração.
            </p>
            <p className="text-lg text-chocolate-700 mb-8">
              Acreditamos que a verdadeira confeitaria vai além do sabor - ela cria momentos, 
              fortalece laços e aquece a alma. Aqui, cada pedido é tratado com atenção especial, 
              como se estivéssemos preparando para alguém da nossa própria família.
            </p>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-chocolate-100 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-chocolate-700" />
                  </div>
                  <span className="text-chocolate-800 pt-2">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-chocolate-200 to-amber-200 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&auto=format&fit=crop"
                alt="Confeitaria Melina - Ambiente familiar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-craft-50 border-2 border-chocolate-200 rounded-2xl shadow-xl p-6 max-w-xs">
              <p className="text-sm text-chocolate-700 italic">
                "O amor é o ingrediente secreto que torna tudo mais gostoso"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
