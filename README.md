# 🧁 Melina Confeitaria Afetiva

Site da Melina Confeitaria - Doces feitos com amor e tradição familiar. Construído com Next.js 16, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 16.1.6** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Dark Mode** - Tema claro/escuro

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

1. Copie `.env.example` para `.env`
2. Configure suas variáveis de ambiente
3. Personalize o conteúdo nos componentes
4. Ajuste as cores no `tailwind.config.ts`

## 📝 Personalização

- Edite o conteúdo em cada componente
- Ajuste as cores em `tailwind.config.ts`
- Modifique metadata em `app/layout.tsx`
- Adicione suas imagens em `public/`

## 📄 Licença

MIT
