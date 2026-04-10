# DuBrasil Nexa - Landing Page

Moderna, premium e pronta para converter. Uma Landing Page de excelência com foco em tecnologia humanizada.

## 🚀 Quick Start

### Pré-requisitos
- Node.js >= 16
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

Acesse `http://localhost:3000` no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Seção hero principal
│   ├── Services.jsx    # O que a Nexa faz
│   ├── Automation.jsx  # Seção de automações
│   ├── Control.jsx     # Supervisão de conversas
│   ├── Platform.jsx    # Plataforma multicanal
│   ├── Benefits.jsx    # Benefícios diretos
│   ├── Differentials.jsx # Diferenciais
│   ├── CTA.jsx        # Call-to-action final
│   └── Footer.jsx     # Rodapé
├── App.jsx            # Componente principal
├── main.jsx           # Entry point
└── index.css          # Estilos globais

```

## 🎨 Design & Tecnologia

**Stack:**
- **React 18.3** - Biblioteca de UI
- **Vite 5.0** - Build tool Ultra-rápido
- **Tailwind CSS 3.4** - Utility-first CSS
- **Framer Motion 11** - Animações suaves
- **Inter Font** - Tipografia profissional

**Design System:**
- Dark mode predominante
- Paleta: Azul técnico (primary) + Verde vibrante (accent)
- Gradientes sutis e bordas arredondadas
- Micro-interações e animações elegantes

## 🎯 Componentes

### Hero
Introdução impactante com proposta de valor clara:
- "A Nexa organiza, centraliza e aplica inteligência ao atendimento"
- CTAs destacadas (Começar Agora | Ver Demonstração)
- Indicadores de confiança (500+ empresas, 24/7, 99.9%)

### Services (O que a Nexa faz)
3 cards descrevendo os pilares:
- Profissionalizar atendimento
- Atendimento humanizado
- Coleta de informações

### Automation
Layout side-by-side com:
- Descrição clara de automações
- Lista de recursos
- Visual interativo

### Control
Supervisão em tempo real:
- Monitoramento em tempo real
- Qualidade de atendimento
- Relatórios e insights
- Visual representativo

### Platform
Plataforma multicanal integrada:
- Grid de componentes (WhatsApp, IA, Automações, Integrações)
- Flow de integração (Atendimento → CRM → ERP → Análise)

### Benefits
3 benefícios diretos:
- Agilidade no atendimento
- Comunicação organizada
- Melhor experiência
- Stats (70% redução tempo, +85% satisfação, +60% eficiência)

### Differentials
5 elementos destacados:
- Funis de oportunidades
- Gestão de tarefas
- Automações
- Meios de pagamento
- Integrações

### CTA
Call-to-action final:
- Heading: "Pronto para transformar seu atendimento?"
- Botões: Começar Gratuitamente | Agendar Demo
- Trust indicators

## 🎭 Animações

Todas as animações estão configuradas com Framer Motion:
- **Fade-in & Slide-up**: 0.6s - 0.8s
- **Hover effects**: Scale, y-translate suave
- **Stagger**: Efeito em cascata em múltiplos elementos
- **WhileInView**: Ativa quando elemento entra em viewport

## 📱 Responsividade

- **Mobile-first**: Otimizado para celular
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Touch-friendly**: Buttons e CTAs otimizadas para toque
- **Performance**: Lazy loading e otimização automática

## ⚡ Performance

- **Otimização Vite**: Carregamento < 1s
- **Image optimization**: WebP com fallback
- **Code splitting**: Carregamento automático
- **Tree shaking**: Apenas código necessário
- **CSS customizado**: Apenas classes utilizadas

## 🔧 Customização

### Cores
Edite `tailwind.config.js`:
```js
colors: {
  primary: { /* Azul técnico */ },
  accent: { /* Verde vibrante */ },
  dark: { /* Escala cinza */ }
}
```

### Fontes
Edite `index.html` `<link>` e `tailwind.config.js` fontFamily

### Animações
Modifique `containerVariants` e `itemVariants` nos componentes

### Conteúdo
Cada componente tem seus textos isolados e fáceis de editar

## 🔐 SEO & Meta Tags

- Title: "DuBrasil Nexa - Tecnologia Humanizada"
- Meta description otimizada
- Open Graph tags (customize `index.html`)
- Semantic HTML

## 📦 Deploy

### Netlify
```bash
npm run build
# Drag & drop a pasta 'dist' no Netlify
```

### Vercel
```bash
npm run build
# Conecte seu repositório e faça push
```

### GitHub Pages
Configure em `vite.config.js` a base URL

## 📝 Licença

© 2026 DuBrasil Nexa - Todos os direitos reservados

---

**Desenvolvido com ❤️ usando React + Vite + Tailwind CSS + Framer Motion**
