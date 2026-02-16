import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Seu Site | Título Personalizado",
  description: "Descrição do seu site aqui. Explique o que você oferece de forma clara e concisa.",
  keywords: [
    "palavra-chave-1",
    "palavra-chave-2",
    "palavra-chave-3",
  ],
  openGraph: {
    title: "Seu Site | Título para Redes Sociais",
    description: "Descrição atraente para compartilhamento em redes sociais.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seu Site | Título para Twitter",
    description: "Descrição para Twitter.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://seu-dominio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.variable + " font-sans"}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
