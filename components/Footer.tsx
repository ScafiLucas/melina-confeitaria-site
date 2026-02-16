import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/seu-link";

const footerLinks = {
  company: [
    { label: "Sobre", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contato", href: "#contato" },
  ],
  social: [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-gradient-to-br from-chocolate-800 to-chocolate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🧁</span>
              <h3 className="text-2xl font-bold text-white">Melina Confeitaria</h3>
            </div>
            <p className="text-craft-200 mb-6">
              Doces feitos com amor e tradição familiar. Transformando momentos especiais em memórias inesquecíveis.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors font-medium shadow-lg"
            >
              💌 Fazer Encomenda
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-craft-100">Links Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-craft-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-craft-100">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@melinaconfeitaria.com"
                  className="text-craft-300 hover:text-white transition-colors"
                >
                  contato@melinaconfeitaria.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5511999999999"
                  className="text-craft-300 hover:text-white transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-craft-300">
                  São Paulo, SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes sociais e copyright */}
        <div className="pt-8 border-t border-chocolate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-craft-300 text-sm">
              © {currentYear} Melina Confeitaria. Feito com ❤️ e muito carinho.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-craft-300 hover:text-white hover:bg-chocolate-700 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
