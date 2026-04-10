# ✅ Checklist de Deploy - DuBrasil Nexa Landing Page

## 📋 Pré-Deploy (Local)

- [ ] Executar `npm install` com sucesso
- [ ] Rodar `npm run dev` e acessar http://localhost:3000
- [ ] Verificar layout em desktop (1920px, 1280px)
- [ ] Verificar layout em tablet (768px)
- [ ] Verificar layout em mobile (375px, 425px)
- [ ] Testar todos os botões e links
- [ ] Verificar todas as animações carregam suave
- [ ] Testar velocidade de scroll
- [ ] Verificar contraste de cores (WCAG)
- [ ] Inspeccionar console (sem erros vermelhos)

## 🏗️ Build

- [ ] Executar `npm run build`
- [ ] Verificar pasta `/dist` criada
- [ ] Executar `npm run preview`
- [ ] Testar build localmente em `http://localhost:4173`
- [ ] Verificar tamanho bundle (deve ser < 200KB gzipped)

## 🌐 Deploy - Netlify

### Opção 1: Drag & Drop (Mais fácil)
1. [ ] Ir para netlify.com
2. [ ] Login com GitHub
3. [ ] Drag & drop pasta `/dist`
4. [ ] Aguardar deploy (2-3 min)
5. [ ] Acessar site em https://xxxxx.netlify.app

### Opção 2: GitHub (Recomendado)
1. [ ] Fazer push para GitHub
2. [ ] Conectar repositório no Netlify
3. [ ] Configurar build command: `npm run build`
4. [ ] Configurar publish directory: `dist`
5. [ ] Salvar e deploy automático

## 🌐 Deploy - Vercel (Alternativa)

1. [ ] Fazer push para GitHub
2. [ ] Ir para vercel.com
3. [ ] Importar projeto
4. [ ] Selecionar buildCommand: `npm run build`
5. [ ] Deploy automático

## ✨ Pós-Deploy

- [ ] Acessar URL de produção
- [ ] Testar layout responsivo em dispositivos reais
- [ ] Inspeccionar performance (Lighthouse)
  - [ ] Performance > 90
  - [ ] Accessibility > 90
  - [ ] Best Practices > 90
  - [ ] SEO > 90
- [ ] Teste de velocidade (PageSpeed Insights)
- [ ] Testar links e CTAs
- [ ] Validar meta tags (og:image, description)
- [ ] Testar em diferentes browsers (Chrome, Firefox, Safari)

## 📊 Performance Target

- [ ] First Contentful Paint: < 1.5s
- [ ] Largest Contentful Paint: < 2.5s
- [ ] Cumulative Layout Shift: < 0.1
- [ ] Time to Interactive: < 3.5s
- [ ] Total Bundle Size: < 200KB (gzipped)

## 🔧 Configurações Adicionais

### Netlify
- [ ] Configurar redirects (netlify.toml)
- [ ] Headers customizados para cache
- [ ] Form handling (se houver formulários)

### DNS
- [ ] Configurar domínio customizado (se houver)
- [ ] Certificado HTTPS (automático com Netlify/Vercel)
- [ ] Records: A ou CNAME

## 📢 Monitoring

- [ ] Instalar analytics (Google Analytics)
- [ ] Configurar rastreamento de eventos
- [ ] Setup de notificações de erro
- [ ] Monitoramento de performance

## 🎯 Otimizações Futuras

- [ ] Adicionar imagens (otimizar com ImageOptim)
- [ ] Implementar lazy loading (next/image ou similar)
- [ ] Service Worker para PWA
- [ ] Compressão de assets
- [ ] Cache strategies
- [ ] CDN para assets estáticos

## 📱 Teste em Dispositivos Reais

- [ ] iPhone 12/13/14 (Safari)
- [ ] Samsung Galaxy (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop Windows (Chrome, Firefox, Edge)
- [ ] Desktop Mac (Safari, Chrome)

## 🐛 Resolução de Problemas Comuns

### Site branco ao carregar
- [ ] Limpar cache browser (Ctrl+Shift+Delete)
- [ ] Verificar console.log para erros
- [ ] Verificar se arquivo index.html está sendo servido

### Animações trancadas
- [ ] Use DevTools → Performance → Record
- [ ] Identificar bottleneck
- [ ] Reduzir número de elementos animados simultaneamente

### Build falha
- [ ] Limpar node_modules e package-lock.json
- [ ] `npm cache clean --force`
- [ ] `npm install` novamente
- [ ] Verificar Node.js version (deve ser >= 16)

## 📝 Post-Deploy

- [ ] Comunicar URL ao cliente
- [ ] Coletar feedback
- [ ] Fazer ajustes conforme feedback
- [ ] Publicar no repositório final
- [ ] Documentação de manutenção futura

---

**Status:** Pronto para deploy
**Data:** 2026-04-09
**Versão:** 1.0.0

✅ A Landing Page está 100% funcional e pronta para produção!
