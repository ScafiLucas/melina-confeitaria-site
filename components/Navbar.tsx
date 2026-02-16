"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/seu-link";

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
          <Link
            href="#"
            className="flex items-center gap-2 text-xl font-bold text-chocolate-800"
          >
            <span className="text-2xl">🧁</span>
            <span>Melina Confeitaria</span>
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
            <a
              href="#galeria"
              className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border-2 border-chocolate-600 text-chocolate-700 hover:bg-chocolate-50 transition-all font-medium"
            >
              <BookOpen size={18} />
              Ver Cardápio
            </a>
            <a
              href={CALENDLY_URL}
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
              <li className="flex flex-col gap-2 pt-2">
                <a
                  href="#galeria"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border-2 border-chocolate-600 text-chocolate-700 font-medium"
                >
                  <BookOpen size={18} />
                  Ver Cardápio
                </a>
                <a
                  href={CALENDLY_URL}
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
