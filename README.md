# 💐 Isabel Kinanga — Tu és Preciosa, Forte e Muito Amada

Uma aplicação de encorajamento e carinho dedicada à **Irmã Isabel Kinanga**, criada com muito amor pela Arminda.

## ✨ Funcionalidades

- **Splash Screen interativa** — com confetes coloridos ao clicar em "Olá Morena ✨"
- **Hero Section** — com versículo de Hebreus 6:10 e mensagem de acolhimento
- **Carta Editorial** — mensagem personalizada com destaque de Marcos 1:11
- **Galeria Bento Grid** — 7 fotos com lightbox touch-friendly
- **Música Ambiente** — acordes suaves em Fá Maior / Ré Menor via Web Audio API
- **Rodapé especial** — mensagem da Arminda

## 🛠 Stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**
- **Lucide React** (icons)
- **Canvas Confetti**
- **Web Audio API** (síntese de acordes)

## 🎨 Identidade Visual

- **Fundo**: `#09070F` / `#120c18` — aveludado escuro
- **Rose Gold**: `#f472b6`, `#fb7185`
- **Champanhe Dourado**: `#fde68a`, `#fbbf24`
- **Lavanda Suave**: `#c084fc`
- **Tipografia Serif**: Cormorant Garamond
- **Tipografia Sans**: Plus Jakarta Sans

## 🚀 Desenvolvimento Local

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`

## 📦 Build & Deploy

```bash
# Build para produção
npm run build

# Preview local do build
npm run preview
```

### Deploy na Vercel

1. Crie um repositório no GitHub e faça push do projeto
2. Importe o repositório na [Vercel](https://vercel.com)
3. As configurações do `vercel.json` são detectadas automaticamente
4. Deploy! ✅

## 📁 Estrutura

```
Isabel/
├── public/
│   ├── assets/          # 7 fotos (foto-1.jpeg ... foto-7.jpeg)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── SplashScreen.tsx
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── GratitudeLetter.tsx
│   │   ├── GallerySection.tsx
│   │   ├── AudioPlayer.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

---

*Feito com muito ❤️ por Arminda — da filha do teu pai Mitange.*
