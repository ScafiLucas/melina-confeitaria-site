# 🧁 Melina Confeitaria - Guia de Uso

## 📋 Passo a Passo para Configuração e Personalização

### 1️⃣ Instalação Inicial

```bash
cd Melina
npm install
```

### 2️⃣ Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env`
2. Configure suas variáveis:
   - `NEXT_PUBLIC_CALENDLY_URL` - Seu link do Calendly
   - `NEXT_PUBLIC_SITE_NAME` - Nome do seu site
   - `NEXT_PUBLIC_SITE_URL` - URL do seu domínio

### 3️⃣ Personalizar Conteúdo

#### **Logo e Nome**
- `components/Navbar.tsx` - Linha 21: Altere "Seu Logo"
- `components/Footer.tsx` - Linha 34: Altere "Seu Logo"

#### **Metadata e SEO**
- `app/layout.tsx` - Linhas 10-38: Altere title, description, keywords, etc.

#### **Hero (Seção Principal)**
- `components/Hero.tsx`:
  - Linha 15-18: Título principal
  - Linha 21: Descrição
  - Linha 29: Texto do botão principal

#### **Sobre**
- `components/About.tsx`:
  - Linha 18: Título da seção
  - Linhas 19-26: Textos descritivos
  - Linhas 4-9: Lista de características/benefícios
  - Linha 40: URL da imagem

#### **Galeria**
- `components/Gallery.tsx`:
  - Linhas 3-26: Array de imagens (substitua as URLs do Unsplash pelas suas)
  - Linha 35: Título
  - Linha 37: Descrição

#### **Footer**
- `components/Footer.tsx`:
  - Linha 34: Nome/Logo
  - Linha 35: Descrição breve
  - Linhas 55-65: Email, telefone e endereço
  - Linhas 15-20: Links de redes sociais

### 4️⃣ Personalizar Cores

Edite `tailwind.config.ts` para mudar o esquema de cores. As cores principais usam a paleta `indigo`.

Para mudar, substitua todas as ocorrências de `indigo` por outra cor:
- `blue`, `purple`, `pink`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, etc.

### 5️⃣ Adicionar/Remover Seções

#### Adicionar nova seção:
1. Crie um novo componente em `components/MinhaSecao.tsx`
2. Importe e adicione em `app/page.tsx`

#### Remover seção:
1. Remova a importação em `app/page.tsx`
2. Remova o componente da pasta `components/`
3. Remova o link da navegação em `components/Navbar.tsx`

### 6️⃣ Rodar o Projeto

```bash
npm run dev
```

Acesse: http://localhost:3000

### 7️⃣ Build para Produção

```bash
npm run build
npm start
```

## 🎯 Dicas de Personalização

### Imagens
- Substitua as URLs do Unsplash pelas suas próprias imagens
- Coloque suas imagens em `public/` e use `/sua-imagem.jpg`
- Ou use serviços como Cloudinary, ImageKit, etc.

### Fontes
- A fonte padrão é Inter (Google Fonts)
- Para mudar, edite `app/layout.tsx` linha 7

### Dark Mode
- Já está configurado e funcionando!
- Usa o ThemeProvider para gerenciar o tema
- Botão de toggle no Navbar

### Responsividade
- Todos os componentes são responsivos
- Testados em mobile, tablet e desktop

## 📦 Estrutura de Arquivos

```
Melina/
├── app/
│   ├── layout.tsx      # Layout principal + metadata
│   ├── page.tsx        # Página inicial (Home)
│   └── globals.css     # Estilos globais
├── components/
│   ├── Navbar.tsx      # Navegação + dark mode
│   ├── Hero.tsx        # Seção hero principal
│   ├── About.tsx       # Seção sobre
│   ├── Gallery.tsx     # Galeria de imagens
│   ├── Footer.tsx      # Rodapé + contatos
│   ├── ThemeProvider.tsx  # Context para tema
│   └── Providers.tsx   # Wrapper de providers
└── public/             # Imagens e arquivos estáticos
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Faça push do código para GitHub
2. Conecte no Vercel
3. Deploy automático!

### Netlify
1. Faça push para GitHub
2. Conecte no Netlify
3. Configure: Build command: `npm run build`, Publish directory: `.next`

## ❓ Dúvidas Comuns

**Q: Como adicionar mais páginas?**  
A: Crie novas pastas em `app/` (ex: `app/blog/page.tsx`)

**Q: Como adicionar formulário de contato?**  
A: Use Formspree, EmailJS ou API Routes do Next.js

**Q: Como mudar o favicon?**  
A: Adicione `favicon.ico` em `app/`

## 📝 Checklist de Personalização

- [ ] Logo e nome do site
- [ ] Metadata (title, description, keywords)
- [ ] Hero (título, descrição, botões)
- [ ] Seção Sobre (textos, características, imagem)
- [ ] Galeria (substituir imagens)
- [ ] Footer (contatos, redes sociais)
- [ ] Links do Calendly
- [ ] Cores (se quiser mudar)
- [ ] Favicon e Open Graph image
- [ ] Variáveis de ambiente (.env)

## 🎉 Pronto!

Agora é só personalizar com seu conteúdo e colocar no ar!
