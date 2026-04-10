# 🚀 DuBrasil Nexa - Landing Page Premium

Uma Landing Page moderna, limpa, tech e premium baseada no conceito de **"Tecnologia Humanizada"**.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06b6d4)
![Status](https://img.shields.io/badge/status-Production%20Ready-green)

## 📸 Preview

Acesse a landing page em produção: [DuBrasil Nexa Landing Page](https://dubrasil-nexa-landing.netlify.app)

## 🎯 Sobre o Projeto

DuBrasil Nexa organiza, centraliza e aplica inteligência ao atendimento. Esta landing page apresenta a plataforma de forma premium, focando em:

✅ **Profissionalização do atendimento**  
✅ **Atendimento humanizado e acolhedor**  
✅ **Automações inteligentes**  
✅ **Supervisão em tempo real**  
✅ **Integração multicanal**  
✅ **Resultados mensuráveis**

## 🛠️ Tech Stack

- **React 18.3** - Biblioteca para UI
- **Vite 5.0** - Build tool ultra-rápido
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 11** - Animações suaves e elegantes
- **Inter Font** - Tipografia profissional

## 📁 Estrutura do Projeto

```
DubrasilNexa/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx      # Navigation fixa
│   │   ├── Hero.jsx        # Seção hero principal
│   │   ├── Services.jsx    # O que a Nexa faz (3 cards)
│   │   ├── Automation.jsx  # Automações inteligentes
│   │   ├── Control.jsx     # Supervisão em tempo real
│   │   ├── Platform.jsx    # Plataforma multicanal
│   │   ├── Benefits.jsx    # Benefícios diretos
│   │   ├── Differentials.jsx # Diferenciais (5 items)
│   │   ├── CTA.jsx         # Call-to-action final
│   │   └── Footer.jsx      # Rodapé com links
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── index.html              # Template HTML
├── vite.config.js          # Configuração Vite
├── tailwind.config.js      # Customização Tailwind
├── postcss.config.js       # Processamento CSS
├── package.json            # Dependências
├── DESENVOLVIMENTO.md      # Guia de desenvolvimento
├── DESIGN_SYSTEM.md        # Design tokens e padrões
├── DEPLOY_CHECKLIST.md     # Checklist pré-deploy
└── README.md               # Este arquivo
```

## 🚀 Quick Start

### Pré-requisitos
- Node.js >= 16
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/dubrasil-nexa.git
cd dubrasil-nexa

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

## 🏗️ Build & Deploy

```bash
# Build para produção
npm run build

# Preview local do build
npm run preview
```

### Deploy na Netlify (Recomendado)

1. Push para GitHub
2. Conectar repositório na [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy automático

## 🎨 Design System

### Cores
- **Primary (Azul Técnico):** `#0ea5e9`
- **Accent (Verde Vibrante):** `#10b981`
- **Dark Mode:** `#030712` - `#1f2937`

### Tipografia
- **Font:** Inter (100-900 weights)
- **H1:** text-7xl font-extrabold
- **H2:** text-5xl font-extrabold
- **Body:** text-base/lg font-normal

### Layout
- **Container:** max-w-6xl
- **Responsive:** Mobile-first (sm, md, lg breakpoints)
- **Spacing:** Generous whitespace (py-20 md:py-32)

## 🎭 Seções da Landing Page

### 1. **Hero**
- Proposta de valor principal
- CTAs destacadas (Começar Agora | Ver Demonstração)
- Indicadores de confiança (500+ empresas, 24/7, 99.9%)

### 2. **Services** (O que a Nexa faz)
3 cards descrevendo pilares:
- Profissionalizar atendimento
- Atendimento humanizado
- Coleta de dados

### 3. **Automation**
- Automações personalizáveis
- Layout side-by-side
- Lista de features

### 4. **Control**
- Supervisão em tempo real
- Monitoramento de conversas
- Relatórios e insights

### 5. **Platform**
- Plataforma multicanal
- Componentes integrados
- Flow de integração (Atendimento → CRM → ERP)

### 6. **Benefits**
- 3 benefícios diretos
- Estatísticas de resultado
- Redução 70% tempo, +85% satisfação, +60% eficiência

### 7. **Differentials**
- 5 recursos adicionais
- Funis, gestão, automações, pagamentos, integrações

### 8. **CTA Final**
- Call-to-action conclusivo
- Botões principais
- Trust indicators

## ⚡ Performance

- **FCP:** < 1.5s
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **Bundle Size:** < 200KB (gzipped)

Lighthouse scores alvo: **90+** em todas as métricas

## 🎬 Animações

Todas as animações usam Framer Motion:
- **Fade-in & Slide-up:** 0.6s - 0.8s
- **Hover Effects:** Scale 1.05, translate-y suave
- **Stagger:** 0.15-0.2s entre elementos
- **WhileInView:** Ativa ao scroll

## 📱 Responsividade

✅ **Mobile-first** - Otimizado para celular  
✅ **Tablet-ready** - Breakpoint 768px  
✅ **Desktop** - Full layout 1024px+  
✅ **Touch-friendly** - Buttons 44px+  
✅ **Escalável** - Tipografia e spacing responsivos

## 🔧 Customização

### Mudar cores
Edite `tailwind.config.js`:
```js
colors: {
  primary: { /* Seu azul */ },
  accent: { /* Seu verde */ }
}
```

### Adicionar nova seção
1. Criar `src/components/NewSection.jsx`
2. Seguir padrão de animações
3. Importar em `App.jsx`

### Modificar conteúdo
Cada componente tem textos isolados e fáceis de editar. Mantenha a essência original.

## 📖 Documentação

- **[DESENVOLVIMENTO.md](./DESENVOLVIMENTO.md)** - Guia técnico detalhado
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Design tokens e padrões
- **[DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md)** - Pré-deploy checklist

## 🧪 Testes

### Manual
```bash
# Desktop responsiveness
npm run dev  # Teste em diferentes resoluções

# Performance
# Use Chrome DevTools → Lighthouse
# Target scores: 90+ em Performance, Accessibility, Best Practices, SEO

# Cross-browser
# Teste em Chrome, Firefox, Safari, Edge
```

## 🐛 Troubleshooting

**Site branco ao carregar?**
- Limpar cache: `Ctrl+Shift+Delete`
- Verificar console.log para erros

**Animações lentas?**
- Usar DevTools Performance
- Reduzir elementos animados simultaneamente

**Build falha?**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

## 📊 SEO

- ✅ Meta tags configuradas
- ✅ OpenGraph tags
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast loading (Core Web Vitals ready)

Customizar em `index.html`:
```html
<meta name="description" content="...">
<meta property="og:title" content="...">
```

## 🔐 Segurança

- ✅ Sem dados sensíveis hardcoded
- ✅ HTTPS obrigatório
- ✅ CSP headers configurados (em deployment)

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia dev server
npm run build    # Build para produção
npm run preview  # Preview local do build
npm run lint     # Lint (quando configurado)
```

## 💡 Boas Práticas Aplicadas

✓ Componentização modular  
✓ Animações performáticas  
✓ Acessibilidade (WCAG)  
✓ SEO base  
✓ Performance otimizada  
✓ Dark mode nativo  
✓ Mobile-first approach  
✓ Código limpo e bem documentado

## 🎯 Próximos Passos

- [ ] Integrar formulário de contato
- [ ] Adicionar Google Analytics
- [ ] Testes A/B em CTAs
- [ ] Otimização de imagens
- [ ] PWA service worker

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

## 📄 Licença

© 2026 DuBrasil Nexa. Todos os direitos reservados.

---

## 🎉 Obrigado!

Desenvolvido com ❤️ usando React + Vite + Tailwind CSS + Framer Motion

**Status:** ✅ Production Ready  
**Versão:** 1.0.0  
**Última atualização:** Abril 2026
