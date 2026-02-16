"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, Instagram } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "5519971193794";
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/melina_confeitariaafetiva/";

// Ícone customizado de WhatsApp
const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Cardápio" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-craft-50/95 backdrop-blur-md border-b border-chocolate-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo - Pronto para receber PNG */}
          <Link
            href="#"
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10">
              {/* Substitua /logo.svg por /logo.png quando adicionar seu logo */}
              <Image
                src="/logo.svg"
                alt="Melina Confeitaria"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-chocolate-800">Melina Confeitaria</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-chocolate-700 hover:text-chocolate-900 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Botões de Redes Sociais - Ícones Premium */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma encomenda.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-9 h-9 text-chocolate-600 hover:text-green-600 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={22} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-9 h-9 text-chocolate-600 hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={1.5} />
            </a>

            <a
              href="#galeria"
              className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border-2 border-chocolate-600 text-chocolate-700 hover:bg-chocolate-50 transition-all font-medium"
            >
              <BookOpen size={18} />
              Ver Cardápio
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma encomenda.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-white hover:from-chocolate-700 hover:to-chocolate-800 transition-all font-medium shadow-md"
            >
              Encomendar
            </a>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-chocolate-700 hover:bg-chocolate-100"
              onClick={() => setOpen((o) => !o)}
              aria-label="Abrir menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-chocolate-200">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-chocolate-700 hover:text-chocolate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-4 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma encomenda.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-chocolate-700 hover:text-green-600"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={24} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-chocolate-700 hover:text-pink-600"
                  aria-label="Instagram"
                >
                  <Instagram size={24} strokeWidth={1.5} />
                </a>
              </li>
              <li className="flex flex-col gap-2 pt-2 border-t border-chocolate-200">
                <a
                  href="#galeria"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border-2 border-chocolate-600 text-chocolate-700 font-medium"
                >
                  <BookOpen size={18} />
                  Ver Cardápio
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma encomenda.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-white font-medium"
                >
                  Encomendar
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
