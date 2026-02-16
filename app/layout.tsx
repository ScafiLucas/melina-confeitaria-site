import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://melinaconfeitaria.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Melina Confeitaria Afetiva";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melina Confeitaria Afetiva | Doces Artesanais Campinas - Barão Geraldo",
    template: "%s | Melina Confeitaria Afetiva",
  },
  description: "Confeitaria artesanal em Barão Geraldo, Campinas. Doces que aquecem o coração com receitas de família, feitos com amor e ingredientes selecionados. Encomendas personalizadas, bolos, brigadeiros gourmet e doces finos.",
  keywords: [
    // Localização específica
    "confeitaria barão geraldo",
    "confeitaria campinas",
    "doces barão geraldo",
    "bolos campinas",
    "confeitaria artesanal campinas",
    // Produtos
    "confeitaria afetiva",
    "confeitaria artesanal",
    "doces caseiros",
    "bolos personalizados",
    "bolos decorados",
    "brigadeiro gourmet",
    "doces finos",
    "doces artesanais",
    "confeitaria familiar",
    // Serviços
    "encomenda de bolos",
    "encomenda doces campinas",
    "bolos aniversário campinas",
    "doces festa campinas",
    "confeitaria encomenda",
    // Long-tail
    "confeitaria artesanal barão geraldo campinas",
    "onde comprar doces artesanais campinas",
    "melhor confeitaria campinas",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteName,
    title: "Melina Confeitaria Afetiva | Doces Artesanais em Campinas 🧁",
    description: "Transforme seus momentos especiais em memórias inesquecíveis com nossos doces artesanais feitos com receitas de família. Atendemos Barão Geraldo e região de Campinas/SP.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Melina Confeitaria Afetiva - Doces Artesanais",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melina Confeitaria Afetiva | Doces Artesanais Campinas",
    description: "Confeitaria artesanal familiar em Barão Geraldo, Campinas. Cada doce carrega afeto e tradição.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Adicione seu código de verificação do Google Search Console aqui
    google: "seu-codigo-de-verificacao-google",
  },
  category: "food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": siteUrl,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description: "Confeitaria artesanal familiar em Barão Geraldo, Campinas. Doces feitos com amor e receitas de família.",
    telephone: process.env.NEXT_PUBLIC_PHONE || "(19) 97119-3794",
    email: process.env.NEXT_PUBLIC_EMAIL || "melinaconfeitariaafetiva@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barão Geraldo",
      addressLocality: "Campinas",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-22.8184",
      longitude: "-47.0647",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Confeitaria Artesanal",
    acceptsReservations: "True",
    sameAs: [
      process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/melina_confeitariaafetiva/",
      process.env.NEXT_PUBLIC_FACEBOOK || "https://facebook.com/melinaconfeitaria",
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable + " font-sans"}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
