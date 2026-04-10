# 🚀 Customização Avançada - DuBrasil Nexa

Guia para desenvolvedores que querem expandir e customizar além do básico.

---

## 📝 Índice

1. [Adicionar Novas Seções](#adicionar-novas-seções)
2. [Customizar Cores](#customizar-cores)
3. [Adicionar Imagens](#adicionar-imagens)
4. [Integrar APIs](#integrar-apis)
5. [Formulários](#formulários)
6. [Analytics](#analytics)
7. [Otimizações Avançadas](#otimizações-avançadas)
8. [PWA Setup](#pwa-setup)

---

## 🔧 Adicionar Novas Seções

### Template Base

Crie `src/components/SuaSecao.jsx`:

```jsx
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function SuaSecao() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-dark-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
        >
          Sua Seção Aqui
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Seus items */}
        </motion.div>
      </div>
    </section>
  )
}
```

### Adicionar em App.jsx

```jsx
import SuaSecao from './components/SuaSecao'

function App() {
  return (
    <main>
      {/* ... outras seções ... */}
      <SuaSecao />  {/* ← Aqui */}
      <Footer />
    </main>
  )
}
```

---

## 🎨 Customizar Cores

### Opção 1: Mudar Primária e Accent

`tailwind.config.js`:

```js
colors: {
  primary: {
    50: '#f0f9ff',    // Lighter
    500: '#0ea5e9',   // ← MUDE AQUI (seu azul)
    600: '#0284c7',   // Darker
  },
  accent: {
    light: '#10b981',
    DEFAULT: '#059669',  // ← MUDE AQUI (seu verde)
    dark: '#047857',
  }
}
```

### Opção 2: Usar Novo Gradiente

Componente:
```jsx
<div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
  Seu conteúdo
</div>
```

### Opção 3: Dark Mode Customizado

`tailwind.config.js`:
```js
dark: {
  900: '#0f1419',  // Seu tom dark
  950: '#0a0e13',  // Mais dark ainda
}
```

### Opção 4: Adicionar Nova Cor

`tailwind.config.js`:
```js
colors: {
  myColor: {
    50: '#ept',
    100: '#....',
    // ... até 950
  }
}
```

Usar:
```jsx
<div className="bg-myColor-500 text-myColor-100">
```

---

## 🖼️ Adicionar Imagens

### Setup de Pasta

```
public/
├── images/
│   ├── hero.png
│   ├── feature-1.png
│   └── platform.png
```

### Usar em Componente

```jsx
import { motion } from 'framer-motion'

export default function MyComponent() {
  return (
    <motion.img
      src="/images/hero.png"
      alt="Descrição"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full rounded-2xl"
    />
  )
}
```

### Otimizar Imagens

Antes do deploy:
1. Comprimir com TinyPNG
2. Converter para WebP
3. Usar responsive images:

```jsx
<picture>
  <source srcSet="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.png" alt="Hero" />
</picture>
```

---

## 🔌 Integrar APIs

### Exemplo: Fetch de Dados

```jsx
import { useEffect, useState } from 'react'

export default function DataComponent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dados')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Erro:', err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Carregando...</div>
  
  return (
    <div>
      {data && <p>{data.message}</p>}
    </div>
  )
}
```

### Exemplo: POST para Backend

```jsx
async function handleSubmit(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    const result = await response.json()
    console.log('Sucesso!', result)
  }
}
```

### Usar variáveis de ambiente

Crie `.env`:
```
VITE_API_URL=https://sua-api.com
VITE_API_KEY=sua-chave-secreta
```

Use no código:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📋 Formulários

### Form Simples com Validação

```jsx
import { useState } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email.includes('@')) {
      setError('Email inválido')
      return
    }

    // Enviar data
    console.log('Email válido:', email)
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        className="w-full px-4 py-2 rounded-lg border border-gray-800 bg-dark-900"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="btn-primary">
        Enviar
      </button>
    </form>
  )
}
```

### Integração Formspree

```jsx
<form action="https://formspree.io/f/SEU_ID" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Enviar</button>
</form>
```

### EmailJS (Recomendado)

Instale:
```bash
npm install @emailjs/browser
```

Use:
```jsx
import emailjs from '@emailjs/browser'

emailjs.init('SEU_PUBLIC_KEY')

const handleSend = async (formData) => {
  try {
    await emailjs.send('service_id', 'template_id', formData)
    console.log('Email enviado!')
  } catch (error) {
    console.error('Erro:', error)
  }
}
```

---

## 📊 Analytics

### Google Analytics 4

1. Crie conta em google.com/analytics
2. Copie seu ID (G-XXXXXXXXXX)
3. Instale:
```bash
npm install @react-google-analytics/core
```

4. Configure em `main.jsx`:
```jsx
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXXXXX')
  }, [])

  return <div>...</div>
}
```

### Rastreamento de Eventos

```jsx
function handleClick() {
  // Rastrear clique
  gtag('event', 'button_click', {
    'button_name': 'Começar Agora',
    'section': 'hero'
  })
}
```

### Hotjar (Heatmaps)

Instale Hotjar via HTML (index.html):
```html
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:123456,hjsv:6};
        // ... resto do código
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

## ⚡ Otimizações Avançadas

### Code Splitting Dinâmico

```jsx
import { lazy, Suspense } from 'react'

const Platform = lazy(() => import('./components/Platform'))

export default function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Platform />
    </Suspense>
  )
}
```

### Lazy Loading de Imagens

```jsx
<img
  src="/images/platform.png"
  alt="Platform"
  loading="lazy"
  className="w-full"
/>
```

### Minify CSS/JS

Vite faz automaticamente em `npm run build`

### Comprimir Assets

```bash
npm install -D vite-plugin-compression
```

`vite.config.js`:
```js
import compression from 'vite-plugin-compression'

export default {
  plugins: [compression()],
}
```

---

## 💨 PWA Setup

### Manifesto (public/manifest.json)

```json
{
  "name": "DuBrasil Nexa",
  "short_name": "Nexa",
  "description": "Tecnologia Humanizada",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#030712",
  "theme_color": "#0ea5e9",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### Service Worker

Crie `public/sw.js`:

```js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
      ])
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
```

---

## 🔒 Variáveis de Ambiente

Crie `.env`:
```
VITE_API_URL=https://api.dubrasil.com
VITE_API_KEY=sua-chave
VITE_ENVIRONMENT=production
```

Use:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
```

---

## 🧪 Testing Setup (Opcional)

```bash
npm install -D vitest @testing-library/react
```

`src/components/Hero.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/A Nexa organiza/i)).toBeInTheDocument()
  })
})
```

Run:
```bash
npm run test
```

---

## 🚀 Deploy Avançado

### Variáveis de Produção (Netlify)

Netlify UI → Settings → Build & deploy → Environment

```
VITE_API_URL=https://api.prod.dubrasil.com
VITE_SENTRY_KEY=seu-sentry-key
```

### Custom Domain

1. Compre domínio (GoDaddy, Namecheap)
2. Netlify → Custom domain
3. Configure DNS records

### CI/CD Workflow (GitHub)

`.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📚 Recursos Avançados

### Headless CMS

Popular options:
- **Contentful**
- **Strapi**
- **Sanity**
- **Hasura**

### E-commerce

- **Shopify**
- **Saleor**
- **Commerce.js**

### Real-time

- **Firebase**
- **Supabase**
- **Pusher**

---

## 🐛 Debugging

### React DevTools

```bash
npm install -D @react-devtools/shell
```

### Console Logs Estruturados

```jsx
console.group('Section render')
console.log('Props:', props)
console.log('State:', state)
console.groupEnd()
```

### Performance Profiling

Chrome DevTools → Performance → Record → Analyze

---

## 📖 Documentação Oficial

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Firebase](https://firebase.google.com)
- [Netlify](https://docs.netlify.com)

---

**Desenvolvido para máximo potencial de customização! 🚀**
