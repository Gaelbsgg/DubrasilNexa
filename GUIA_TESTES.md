# 🧪 Guia de Testes - DuBrasil Nexa Landing Page

## ✅ Verificação Pré-Launch

Execute este guia antes de ir para produção.

---

## 1️⃣ Testes Locais (npm run dev)

### Funcionalidade
- [ ] Página carrega sem erros
- [ ] Todos os links funcionam
- [ ] Botões são clickáveis
- [ ] Menu fica fixed no top
- [ ] Scroll funciona suavemente
- [ ] Console browser sem erros vermelhos

### Renderização
- [ ] Textos aparecem corretamente
- [ ] Imagens exibem (se houver)
- [ ] Cores aparecem como esperado
- [ ] Fontes carregam (não há fallback)
- [ ] Ícones aparecem

### Animações
- [ ] Hero faz fade-in
- [ ] Cards fazem slide-up
- [ ] Hover effects funcionam
- [ ] Scroll animations disparam
- [ ] Nenhuma animação travada

---

## 2️⃣ Testes Responsividade

### Mobile (375px - iPhone SE)
```bash
DevTools: Ctrl+Shift+J → Clique device toggle → iPhone SE
```
- [ ] Layout stacks vertical
- [ ] Textos legíveis (não afunilados)
- [ ] Botões toucháveis (> 44px)
- [ ] Imagens se redimensionam
- [ ] Menu em hamburger (se aplicável)
- [ ] Padding respeitado
- [ ] Nada overflow horizontal

### Tablet (768px - iPad)
```bash
DevTools: iPad ou custom 768x1024
```
- [ ] Layout em 2 colunas
- [ ] Cards em grid apropriado
- [ ] Espaçamento balanceado
- [ ] Tipografia adequada
- [ ] Sem gaps excessivos

### Desktop (1440px ou 1920px)
```bash
DevTools: Custom 1440x900 ou 1920x1080
```
- [ ] Full layout utilizado
- [ ] Max-width respeitado (max-w-6xl)
- [ ] Tipografia grande e legível
- [ ] Espaçamento generoso
- [ ] Nada parece apertado

### Orientações
- [ ] Landscape: Teste em mobile landscape
- [ ] Portrait: Teste vertical
- [ ] Scroll com browser bars

---

## 3️⃣ Testes de Compatibilidade

### Browsers Desktop

#### Chrome 120+
```bash
Abrir em: Chrome
```
- [ ] Renderiza corretamente
- [ ] Animações suaves
- [ ] Console limpo

#### Firefox 121+
```bash
Abrir em: Firefox
```
- [ ] Renderiza corretamente
- [ ] Animações suaves
- [ ] Console limpo

#### Safari 17+ (Mac)
```bash
Abrir em: Safari
```
- [ ] Renderiza corretamente
- [ ] Animações suaves
- [ ] Console limpo

#### Edge 120+
```bash
Abrir em: Edge
```
- [ ] Renderiza corretamente
- [ ] Animações suaves
- [ ] Console limpo

### Browsers Mobile

#### Chrome Mobile (Android)
- [ ] Layout responsivo
- [ ] Tap target > 44px
- [ ] Sem horizontal scroll

#### Safari iOS (iPhone)
- [ ] Layout responsivo
- [ ] Tap target > 44px
- [ ] Sem horizontal scroll

#### Samsung Internet
- [ ] Layout responsivo
- [ ] Performance aceitável

---

## 4️⃣ Testes de Performance

### Google PageSpeed Insights
```
1. Abrir: https://pagespeed.web.dev/
2. Colar URL do site
3. Analisar scores
```
Target:
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Chrome DevTools Lighthouse
```bash
DevTools: Ctrl+Shift+J → Aba Lighthouse
→ Clique em "Analyze page load"
```
Target:
- [ ] Performance: 95+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 100

### Chrome DevTools Performance
```bash
DevTools: Performance tab
→ Record page loading
→ Stop e analyze
```
Target:
- [ ] FCP (First Contentful Paint): < 1.5s
- [ ] LCP (Largest): < 2.5s
- [ ] CLS (Layout Shift): < 0.1
- [ ] TTI (Interactive): < 3.5s

### Network Speed
```bash
DevTools: Network tab
→ Throttle: "Slow 4G"
→ Reload
```
- [ ] Page loads sem timeout
- [ ] Imagens carregam progressivamente
- [ ] Nenhum 404 error

---

## 5️⃣ Testes de Acessibilidade

### Contraste
```bash
DevTools: Ctrl+Shift+J → Lighthouse → Accessibility
```
- [ ] Scores >= 95
- [ ] Textos contra fundo: 4.5:1 mínimo

### Navegação por Teclado
```
1. Pressione Tab repetidamente
```
- [ ] Focus é visível
- [ ] Ordem lógica
- [ ] Todos elementos alcançáveis
- [ ] Nenhum trap com tab

### Screen Reader (Nvaccess NVDA se disponível)
- [ ] Headings estruturados
- [ ] Alt text em imagens
- [ ] Labels em inputs
- [ ] Botões descritivos

---

## 6️⃣ Testes de UX/UI

### Hover States
- [ ] Botões mudam ao hover
- [ ] Cards se movem ao hover
- [ ] Cursor é pointer em botões
- [ ] Feedback visual claro

### Click/Tap
- [ ] Todos os botões funcionam
- [ ] Links abrem corretamente
- [ ] CTAs levam a lugar certo
- [ ] Nenhum clique sem efeito

### Scrolling
- [ ] Scroll suave
- [ ] Animações não travam
- [ ] Performance ao scroll
- [ ] Bottom alcançável

### Viewport
- [ ] Sem horizontal scroll
- [ ] Sem vertical scroll excessivo
- [ ] Layout não quebra

---

## 7️⃣ Testes de SEO

### Meta Tags
```bash
DevTools: Elements → Head
```
- [ ] `<title>` presente
- [ ] `<meta description>` presente
- [ ] `<meta viewport>` presente
- [ ] Open Graph tags OK

### Headings
```bash
DevTools: Lighthouse → SEO
```
- [ ] H1 único e descritivo
- [ ] H2, H3 em ordem
- [ ] Sem heading skip (H1 → H3)

### Structured Data
- [ ] JSON-LD se aplicável
- [ ] Schema.org markup

### Robots & Sitemap
- [ ] robots.txt presente (se necessário)
- [ ] sitemap.xml presente (se necessário)

---

## 8️⃣ Testes de Funcionalidade

### Botões
- [ ] "Começar Agora" funciona
- [ ] "Ver Demonstração" funciona
- [ ] "Agendar Demo" funciona
- [ ] Links do menu funcionam

### Navegação
- [ ] Header sticky funciona
- [ ] Links internos navegam
- [ ] Volta ao topo (se houver)
- [ ] Sem 404 em navegação

### Forms (se houver)
- [ ] Validação funciona
- [ ] Submit envia
- [ ] Feedback ao usuário

---

## 9️⃣ Testes de Segurança

### HTTPS
- [ ] URL: https:// (não http://)
- [ ] Certificado válido
- [ ] Sem warnings security

### Content Security Policy
- [ ] Sem inline scripts
- [ ] Sem eval()
- [ ] Fontes importadas seguras

### Headers
- [ ] X-Frame-Options (se necesário)
- [ ] X-Content-Type-Options
- [ ] Referrer-Policy

---

## 🔟 Testes de Produção

### Deploy Test
```bash
1. npm run build
2. npm run preview
3. Acessar http://localhost:4173
```
- [ ] Tudo funciona igual a dev
- [ ] Imagens carregam
- [ ] CSS aplicado
- [ ] JS executando

### URL Live
Depois de deploy:
- [ ] Abra URL oficial
- [ ] Faça todos testes novamente
- [ ] Teste em 3G/4G real
- [ ] Teste em dispositivo real

---

## 1️⃣1️⃣ Checklist Final

### Antes de Publicar
- [ ] Testes 1-10 completos
- [ ] Lighthouse 90+ todas métricas
- [ ] Mobile score 95+
- [ ] Desktop score 95+
- [ ] Sem console errors
- [ ] Responsivo em 3+ devices
- [ ] Performance adequada
- [ ] Conteúdo sem typos
- [ ] Links todos funcionando
- [ ] Imagens otimizadas

### Pós-Deploy
- [ ] URL acessa sem erro
- [ ] Certificado HTTPS válido
- [ ] Google Search Console configurado
- [ ] Analytics rastreando
- [ ] Backup feito

---

## 📊 Resultado dos Testes

Imprima este resultado:

```
TESTES DE LANDING PAGE - DuBrasil Nexa
=====================================

Funcionalidade:          ✅ PASSOU
Responsividade:         ✅ PASSOU
Compatibilidade:        ✅ PASSOU
Performance:            ✅ PASSOU (Lighthouse 95+)
Acessibilidade:         ✅ PASSOU  
UX/UI:                  ✅ PASSOU
SEO:                    ✅ PASSOU
Segurança:              ✅ PASSOU

===============================
STATUS: ✅ PRONTO PARA PRODUÇÃO
===============================

Data teste: 2026-04-09
Tester: [Nome]
Navegador: [Chrome/Firefox/Safari]
Device: [Desktop/Mobile/Tablet]
```

---

## 🎯 Teste Completo em 30 Minutos

```
0-5 min:    Funcionalidade básica
5-10 min:   Responsividade (mobile, tablet, desktop)
10-15 min:  Lighthouse scores
15-20 min:  Cross-browser (Chrome, Firefox, Safari)
20-25 min:  Performance (Network throttling)
25-30 min:  Documentação final
```

---

## ✨ Dicas de Teste

**Pro Tips:**
- Teste sempre em mode incógnito (sem cache)
- Use real devices quando possível
- Teste com Internet lenta (3G sim)
- Teste com várias resoluções
- Teste com diferentes navegadores
- Teste com JavaScript desabilitado
- Teste com plugins Block ads ativados
- Teste com VPN ligada

**Ferramentas Úteis:**
- Chrome DevTools (F12)
- Lighthouse (DevTools Audit)
- WebPageTest (webpagetest.org)
- GTmetrix (gtmetrix.com)
- Responsively App (local testing)

---

## 🚀 Após Testes Verdes

1. ✅ Todos testes passando
2. ✅ Deploy no Netlify/Vercel
3. ✅ Teste URL de produção
4. ✅ Configurar domínio
5. ✅ Ativar SSL/HTTPS
6. ✅ Google Search Console
7. ✅ Analytics configurado
8. ✅ Publicar para o público

---

## 📝 Logging de Testes

Mantenha registro:
```md
## Teste #1
- Date: 2026-04-09
- Browser: Chrome 120
- Device: Desktop 1440px
- Results: ✅ PASSOU
- Issues: Nenhum

## Teste #2
- Date: 2026-04-09
- Browser: Safari Mobile
- Device: iPhone 14
- Results: ✅ PASSOU
- Issues: Nenhum
```

---

**🎉 Testes Completos = Lançamento com Confiança!**

---

Última atualização: 2026-04-09
