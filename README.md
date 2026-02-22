# Melina Confeitaria Afetiva

Site da Melina Confeitaria - Doces feitos com amor e tradição familiar. Construído com Next.js 16, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 16.1.6** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização com paleta craft & chocolate
- **Lucide React** - Ícones
- **Next/Image** - Otimização de imagens

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Estrutura

```
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página inicial
│   └── globals.css     # Estilos globais
├── components/
│   ├── Navbar.tsx      # Barra de navegação
│   ├── Hero.tsx        # Seção hero
│   ├── About.tsx       # Seção sobre
│   ├── Gallery.tsx     # Galeria de imagens
│   ├── Footer.tsx      # Rodapé
│   ├── ThemeProvider.tsx
│   └── Providers.tsx
└── public/             # Arquivos estáticos
```

## ⚙️ Configuração

1. **Variáveis de Ambiente**
   - Copie `.env.example` para `.env`
   - Configure:
     - `NEXT_PUBLIC_CALENDLY_URL` - Link do Calendly
     - `NEXT_PUBLIC_WHATSAPP` - Número do WhatsApp (formato: 5511999999999)
     - `NEXT_PUBLIC_INSTAGRAM` - URL do Instagram

2. **Logo**
   - Logo já configurado em `/public/logo.png`
   - Para trocar: substitua o arquivo mantendo o nome `logo.png`
   - Formato: PNG com fundo transparente
   - Dimensões recomendadas: largura 360px, altura 96px (proporção 180x48 @ 2x para telas retina)

3. **Personalização**
   - Ajuste cores em `tailwind.config.ts` (paleta craft & chocolate)
   - Modifique textos nos componentes
   - Atualize metadata em `app/layout.tsx`

## 📝 Personalização

- **Cores**: Edite `tailwind.config.ts` para ajustar paleta craft/chocolate
- **Conteúdo**: Atualize textos em cada componente
- **Imagens**: Adicione suas fotos de produtos na galeria
- **Metadata**: Configure SEO em `app/layout.tsx`

## ✍️ Atualização de conteúdo (sem mexer nos componentes)

Para o time atualizar conteúdos com segurança, use os arquivos de dados em `data/`:

- `data/site-images.ts` → imagens fixas (logo/hero/sobre)
- `data/gallery-images.ts` → imagens da seção Galeria
- `data/testimonials.ts` → depoimentos da seção Testimonials
- `data/README.md` → guia completo de edição para o time

### Como atualizar a galeria

Abra `data/gallery-images.ts` e mantenha este formato para cada item:

```ts
{
  url: "https://link-da-imagem.jpg",
  alt: "Descrição da imagem"
}
```

- **Adicionar imagem**: cole um novo objeto na lista
- **Editar imagem**: altere `url` e/ou `alt`
- **Remover imagem**: apague o objeto inteiro

### Como atualizar depoimentos

Abra `data/testimonials.ts` e mantenha este formato:

```ts
{
  name: "Nome da pessoa",
  text: "Texto do depoimento",
  rating: 5
}
```

- **Adicionar comentário**: adicione novo objeto na lista
- **Editar comentário**: altere `name`, `text` ou `rating`
- **Remover comentário**: apague o objeto inteiro

> Dica: use sempre o mesmo formato dos itens existentes para evitar erro de sintaxe.

## 📄 Licença

MIT
