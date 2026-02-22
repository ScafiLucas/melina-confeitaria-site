# COMO USAR (versão atual)

Guia rápido para atualizar conteúdo e publicar sem quebrar layout.

## 1) Onde editar conteúdo

Não edite os componentes para conteúdo do dia a dia.  
Use apenas os arquivos em `data/`:

- `data/site-images.ts`
  - Logo do header
  - Imagem de fundo do hero
  - Divisor decorativo do hero
  - Imagem da seção Sobre

- `data/gallery-images.ts`
  - Lista de imagens da galeria

- `data/testimonials.ts`
  - Lista de depoimentos

Detalhes: `data/README.md`.

## 2) Como atualizar imagens

### Imagens fixas (logo/hero/sobre)
Arquivo: `data/site-images.ts`

Troque apenas as URLs:

```ts
export const siteImages = {
  navbarLogo: "URL_DA_LOGO",
  heroBackground: "URL_DO_FUNDO_HERO",
  heroDivider: "URL_DO_DIVISOR",
  aboutImage: "URL_DA_IMAGEM_SOBRE",
};
```

### Galeria
Arquivo: `data/gallery-images.ts`

Cada item:

```ts
{
  url: "https://...",
  alt: "Descrição da imagem"
}
```

- Adicionar: copiar um objeto e colar no fim da lista
- Editar: mudar `url` e/ou `alt`
- Remover: apagar o objeto

## 3) Como atualizar depoimentos

Arquivo: `data/testimonials.ts`

Cada item:

```ts
{
  name: "Nome",
  text: "Depoimento",
  rating: 5
}
```

- `rating` deve ficar entre `0` e `5`
- Para quebra de linha dentro do texto, use `\n`

## 4) Publicar mudanças

### Opção A — GitHub Web (sem terminal)
1. Acesse o repositório no GitHub.
2. Abra o arquivo em `data/`.
3. Clique em **Edit** (ícone de lápis).
4. Salve em **Commit changes** na branch `main`.
5. A Vercel faz deploy automático.

### Opção B — Local (terminal)
```bash
git add .
git commit -m "Atualiza conteúdo"
git push origin main
```

## 5) Conferência rápida após deploy

- Verificar se os cards da galeria/depoimentos carregam com as novas imagens/textos
- Verificar mobile (iPhone/Android) e desktop
- Verificar se links de WhatsApp/Instagram/Cardápio continuam corretos

## 6) Desenvolvimento local (quando precisar)

```bash
npm install
npm run dev
```

URL local: `http://localhost:3000`
