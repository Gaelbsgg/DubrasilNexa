# 🎨 Guia Visual - DuBrasil Nexa Landing Page

## Estrutura da Página

```
┌─────────────────────────────────────┐
│         HEADER / NAVIGATION          │ Fixed - Backdrop blur
├─────────────────────────────────────┤
│         HERO SECTION                 │ Min-height: 100vh
│  - Headline + Subheadline            │ Gradientes de fundo
│  - CTAs (Primary + Secondary)        │ Trust indicators
│  - Scroll indicator                  │
├─────────────────────────────────────┤
│    SERVICES (O QUE A NEXA FAZ)      │ 3 Cards Desktop
│  - Profissionalizar                  │ 1 Card Mobile
│  - Humanizado                        │ Hover animations
│  - Coleta de dados                   │
├─────────────────────────────────────┤
│       AUTOMATION (SIDE-BY-SIDE)     │ 2 colunas desktop
│  - Descrição + Features              │ Stack mobile
│  - Visual animado                    │
├─────────────────────────────────────┤
│   CONTROL (SIDE-BY-SIDE REVERSO)    │ Flex order-2
│  - Visual à esquerda                 │
│  - Descrição + Benefits              │
├─────────────────────────────────────┤
│  PLATFORM (MULTICANAL)               │ 4 cards componentes
│  - Grid componentes                  │ Flow integração
│  - Showcase de integração            │
├─────────────────────────────────────┤
│      BENEFITS (3 CARDS)              │ + Stats
│  - Agilidade                         │
│  - Comunicação                       │
│  - Experiência                       │
├─────────────────────────────────────┤
│    DIFFERENTIALS (5 CARDS GRID)      │ 2 cols mobile
│  - Funis, Gestão, Automações, etc   │ 5 cols desktop
├─────────────────────────────────────┤
│        CTA FINAL (CENTERED)          │ Call-to-action
│  - Heading impactante                │ 2 botões
│  - Subheadline                       │ Trust info
├─────────────────────────────────────┤
│       FOOTER                         │ 4 colunas
│  - Links + Social                    │ Dark subtle
│  - Copyright                         │
└─────────────────────────────────────┘
```

## 🎯 Design Tokens

### Cores
```
Dark Base:     #030712 (dark-950)
Dark Secondary: #1f2937 (dark-800)
Dark Tertiary:  #111827 (dark-950)

Primary:       #0ea5e9 (Sky blue - Tech)
Primary Dark:  #0369a1
Primary Light: #7dd3fc

Accent:        #10b981 (Emerald - Vibrant)
Accent Dark:   #047857
Accent Light:  #6ee7b7

Text Light:    #f3f4f6 (gray-100)
Text Medium:   #d1d5db (gray-300)
Text Dark:     #6b7280 (gray-500)
```

### Tipografia
```
Font Family:   Inter
Weights:       100, 200, 300, 400, 500, 600, 700, 800, 900

Hierarchy:
H1 (Hero):     text-7xl font-extrabold
H2 (Section):  text-5xl font-extrabold
H3 (Card):     text-2xl font-bold
Body:          text-base font-normal
Small:         text-sm font-medium
```

### Spacing
```
Container:     max-w-6xl
Padding:       px-6 md:px-8
Gap:           gap-8 md:gap-12
Section pad:   py-20 md:py-32
Card pad:      p-8 md:p-10
```

### Sombras & Efeitos
```
Border:        border border-gray-800
Border hover:  hover:border-primary-500/50

Shadow glow:   shadow-glow (primary)
Shadow accent: shadow-glow-accent

Blur:          backdrop-blur-xl
Gradient:      from-primary-500/20 to-transparent
```

### Animações
```
Fade + Slide:  opacity 0→1, y 20→0 (0.6s)
Scale hover:   scale 1→1.05 (0.3s)
Stagger:       0.15-0.2s between children
Timing:        ease-out (entrada), ease-in-out (saída)
```

## 📱 Responsividade

### Mobile (< 640px)
- Stack vertical tudo
- Padding reduzido (px-6)
- Text smaller (3xl → 4xl heading)
- 2 cols máximo
- Touch-friendly: btn mín 44px

### Tablet (640px - 768px)
- Começa grid
- Padding balanceado
- 2-3 colunas

### Desktop (> 768px)
- Full layout
- 3-4 colunas
- Side-by-side sections
- Larger typography

## 🎭 Padrões de Interação

### Botão Primary
```
Estado padrão:  from-primary-500 to-primary-600
Hover:          from-primary-400 to-primary-500
                scale(1.05)
                shadow-glow
```

### Botão Secondary
```
Estado padrão:  border border-primary-500/30
Hover:          border-primary-400
                text-primary-300
                bg-primary-500/5
                scale(1.05)
```

### Card Hover
```
Default:  border-gray-800
Hover:    border-primary-500/50
          -translate-y-1
          shadow-lg
```

### Animação ao scroll
```
Initial:  opacity 0, y 20
InView:   opacity 1, y 0
Delay:    baseDelay + staggerChildren * index
```

## 🔧 Customização Rápida

### Mudar marca de azul para roxo:
`tailwind.config.js` → Trocar primary colors

### Adicionar nova seção:
1. Criar `src/components/NewSection.jsx`
2. Copiar padrão de outro componente
3. Importar em `App.jsx`
4. Adicionar entre seções

### Modificar tamanhos fonte:
`tailwind.config.js` → fontSize object

### Alterar duração animações:
Em cada componente → `transition={{ duration: 0.X }}`

## 📊 Métricas de Performance

Alvo:
- FCP (First Contentful Paint): < 1.5s
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- TTI (Time to Interactive): < 3.5s

## 🎬 Exemplo de Nova Seção

```jsx
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function NewSection() {
  return (
    <section className="py-20 md:py-32 bg-dark-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Content */}
      </motion.div>
    </section>
  )
}
```

---

**Última atualização:** 2026-04-09
