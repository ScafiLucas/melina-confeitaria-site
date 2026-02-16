/**
 * Google Analytics Component
 * 
 * Para usar este componente:
 * 1. Crie uma conta no Google Analytics (https://analytics.google.com)
 * 2. Obtenha seu ID de medição (ex: G-XXXXXXXXXX)
 * 3. Adicione no arquivo .env:
 *    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * 4. Importe e adicione este componente no app/layout.tsx:
 *    import GoogleAnalytics from '@/components/GoogleAnalytics'
 *    
 *    E dentro do <body>:
 *    <GoogleAnalytics />
 */

import Script from 'next/script';

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Se não houver ID configurado, não renderiza nada
  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
