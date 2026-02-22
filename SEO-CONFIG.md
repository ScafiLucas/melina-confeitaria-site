# SEO-CONFIG (estado atual)

Documento atualizado com base no projeto atual.

## O que já está implementado

### 1) Metadata global (`app/layout.tsx`)
- `metadataBase` com `NEXT_PUBLIC_SITE_URL`
- `title` com template
- `description` e `keywords` focadas em Campinas/Barão Geraldo
- Open Graph e Twitter Card
- `canonical`
- `robots` (incluindo `googleBot`)
- `icons` e `manifest`
- `verification.google` (campo pronto para receber valor real)

### 2) Dados estruturados (JSON-LD)
- Tipo `Bakery`
- Nome, URL, telefone, email, endereço, geolocalização
- Horário de funcionamento
- Redes sociais em `sameAs`

### 3) Rotas SEO automáticas
- `app/sitemap.ts` -> `/sitemap.xml`
- `app/robots.ts` -> `/robots.txt`
- `app/opengraph-image.tsx` -> `/opengraph-image`
- `app/twitter-image.tsx` -> `/twitter-image`

### 4) PWA básico
- `public/manifest.json`

## Variáveis de ambiente relevantes

Definir no `.env` / Vercel:

- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_INSTAGRAM`
- `NEXT_PUBLIC_FACEBOOK`

## Pontos de atenção (importantes)

1. Em `app/layout.tsx`, Open Graph/Twitter ainda referenciam:
   - `${siteUrl}/og-image.jpg`
2. O projeto também possui imagem OG dinâmica em:
   - `/opengraph-image`

Recomendação: escolher **uma estratégia** (estática ou dinâmica) e padronizar.

## Checklist recomendado para produção

- [ ] Confirmar `NEXT_PUBLIC_SITE_URL` com domínio final (`https://...`)
- [ ] Inserir código real em `verification.google` no `layout.tsx`
- [ ] Submeter `/sitemap.xml` no Google Search Console
- [ ] Validar `robots.txt` publicado
- [ ] Padronizar URL da OG image (estática ou dinâmica)
- [ ] Garantir existência dos ícones:
  - `/favicon.ico`
  - `/icon-192.png`
  - `/icon-512.png`
  - `/apple-icon.png`
- [ ] Testar previews sociais (WhatsApp, LinkedIn, X)

## Como validar rapidamente

1. Build local:
```bash
npm run build
```

2. Validar rotas:
- `/sitemap.xml`
- `/robots.txt`
- `/opengraph-image`
- `/twitter-image`

3. Ferramentas úteis:
- Google Search Console
- Google Rich Results Test
- PageSpeed Insights

## Observação

Este documento descreve **o que está no projeto hoje**.  
Sempre que mudar metadata/rotas/estratégia de OG image, atualize este arquivo.
