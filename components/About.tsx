import { CheckCircle2 } from "lucide-react";

const features = [
  "Característica ou benefício 1",
  "Característica ou benefício 2",
  "Característica ou benefício 3",
  "Característica ou benefício 4",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Texto descritivo sobre sua empresa, produto ou serviço. Explique o que você faz,
              como você faz e por que as pessoas devem escolher você.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Adicione mais detalhes que sejam relevantes para seus clientes. Conte sua história
              de forma envolvente e autêntica.
            </p>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Sobre nós"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
