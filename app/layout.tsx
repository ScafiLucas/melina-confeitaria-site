import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Melina Confeitaria Afetiva | Doces Feitos com Amor e Tradição",
  description: "Confeitaria artesanal familiar. Doces que aquecem o coração com receitas de família, feitos com amor e ingredientes selecionados. Encomendas personalizadas em São Paulo.",
  keywords: [
    "confeitaria afetiva",
    "confeitaria artesanal",
    "doces caseiros",
    "bolos personalizados",
    "confeitaria são paulo",
    "doces artesanais",
    "confeitaria familiar",
    "encomenda de bolos",
    "brigadeiro gourmet",
    "doces finos",
  ],
  openGraph: {
    title: "Melina Confeitaria Afetiva | Doces Feitos com Amor 💕",
    description: "Transforme seus momentos especiais em memórias inesquecíveis com nossos doces artesanais feitos com receitas de família.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melina Confeitaria Afetiva | Doces com Amor",
    description: "Confeitaria artesanal familiar em São Paulo. Cada doce carrega afeto e tradição.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://melinaconfeitaria.com",
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
