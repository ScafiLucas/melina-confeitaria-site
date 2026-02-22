# Melina Confeitaria Afetiva

Site institucional da Melina Confeitaria, construído com Next.js, TypeScript e Tailwind CSS.

## Stack

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

## Scripts

```bash
npm run dev     # desenvolvimento local
npm run build   # build de produção
npm run start   # sobe build de produção
npm run lint    # lint do projeto
```

## Instalação

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_MENU_PDF`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_WHATSAPP`
- `NEXT_PUBLIC_LOCATION`
- `NEXT_PUBLIC_INSTAGRAM`
- `NEXT_PUBLIC_FACEBOOK`

## Estrutura principal

```text
app/
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Gallery.tsx
  Testimonials.tsx
  Footer.tsx
data/
  site-images.ts
  gallery-images.ts
  testimonials.ts
  README.md
public/
  manifest.json
  robots.txt
```

## Edição de conteúdo (sem alterar componentes)

Toda edição frequente de conteúdo deve ser feita em `data/`:

- `data/site-images.ts`: logo e imagens fixas das seções
- `data/gallery-images.ts`: lista de imagens da galeria
- `data/testimonials.ts`: lista de depoimentos

Guia detalhado para o time: `data/README.md`.

## Deploy

O projeto está integrado com Vercel.  
Push na `main` gera deploy automático em produção.

## Documentação complementar

- `COMO-USAR.md` — guia operacional para atualização
- `SEO-CONFIG.md` — configuração e checklist de SEO

## Licença

MIT
