# Guia de Atualização de Conteúdo

Este projeto foi preparado para que o time atualize conteúdo sem mexer nos componentes.

## Onde editar

- `data/site-images.ts`  
  Imagens fixas do site: logo, fundo do hero, divisor do hero e imagem da seção Sobre.

- `data/gallery-images.ts`  
  Lista de imagens da Galeria.

- `data/testimonials.ts`  
  Lista de depoimentos.

## 1) Trocar imagens fixas (logo/hero/sobre)

Abra `data/site-images.ts` e altere apenas as URLs:

```ts
export const siteImages = {
  navbarLogo: "URL_DA_LOGO",
  heroBackground: "URL_DO_FUNDO_HERO",
  heroDivider: "URL_DO_DIVISOR_HERO",
  aboutImage: "URL_DA_IMAGEM_SOBRE",
};
```

## 2) Galeria (adicionar/remover/editar)

Abra `data/gallery-images.ts`.

Formato de cada item:

```ts
{
  url: "https://link-da-imagem.jpg",
  alt: "Descrição da imagem"
}
```

- **Adicionar**: copie um item e cole no final.
- **Editar**: altere `url` e/ou `alt`.
- **Remover**: apague o objeto inteiro.

## 3) Depoimentos (adicionar/remover/editar)

Abra `data/testimonials.ts`.

Formato de cada item:

```ts
{
  name: "Nome da pessoa",
  text: "Texto do depoimento",
  rating: 5
}
```

- **Adicionar**: copie um item e cole no final.
- **Editar**: altere `name`, `text` e/ou `rating`.
- **Remover**: apague o objeto inteiro.
- **rating**: use de 0 a 5.
- Para quebra de linha no texto, use `\n`.

## Após editar

1. Salve o arquivo.
2. Rode localmente (`npm run dev`) para conferir.
3. Commit e push para `main` (a Vercel publica automaticamente).
