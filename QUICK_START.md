# 🎬 Guia Rápido de Início - DuBrasil Nexa

## ⏱️ 5 Minutos para Rodar Localmente

### Passo 1: Instalar Dependências (2 min)
```bash
npm install
```

### Passo 2: Iniciar Servidor (1 min)
```bash
npm run dev
```

### Passo 3: Abrir no Browser
Automaticamente abre `http://localhost:3000`

✅ **Pronto!** Você está rodando a landing page

---

## 🏗️ Build para Produção (2 min)

```bash
npm run build
```

Uma pasta `/dist` será criada com os arquivos otimizados.

### Testar Build Localmente
```bash
npm run preview
```

Acesse `http://localhost:4173`

---

## 🌐 Deploy em 3 Passos

### Via Netlify (Recomendado - 1 min)

**Opção A: Drag & Drop (Mais fácil)**
1. Vá para: https://app.netlify.com/drop
2. Faça build: `npm run build`
3. Arraste a pasta `/dist` para o Netlify
4. Pronto! Seu site está online

**Opção B: GitHub Integration**
1. Push código para GitHub
2. Conecte repositório no Netlify
3. Netlify faz deploy automático

---

## 📁 Estrutura Principal

```
src/
├── App.jsx                 # Componente principal
├── main.jsx               # Entry point
├── index.css              # Estilos globais
└── components/            # Componentes individuais
    ├── Header.jsx        # Menu/Nav fixa
    ├── Hero.jsx          # Seção principal
    ├── Services.jsx      # O que fazemos
    ├── Automation.jsx    # Automações
    ├── Control.jsx       # Supervisão
    ├── Platform.jsx      # Plataforma
    ├── Benefits.jsx      # Benefícios
    ├── Differentials.jsx # Más features
    ├── CTA.jsx          # Call-to-action
    └── Footer.jsx       # Rodapé
```

---

## 🎨 Editar Conteúdo

### Mudar Texto Principal
Abra `src/components/Hero.jsx` e edite as strings.

### Mudar Cores
Edite `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#SEU_AZUL'  // Trocar azul
  },
  accent: {
    DEFAULT: '#SEU_VERDE'  // Trocar verde
  }
}
```

### Mudar Tipografia
Edite `tailwind.config.js` → `fontFamily`

---

## 🔍 Verificar Erros

```bash
# Se houver problema, limpar cache
rm -rf node_modules package-lock.json

# Reinstalar
npm install

# Rodar novamente
npm run dev
```

---

## 📱 Testar Responsividade

### No Chrome DevTools
1. Pressione `F12`
2. Clique no ícone de dispositivo (canto superior esquerdo)
3. Selecione "iPhone 12", "iPad", "Desktop"

### Resoluções Alvo
- Mobile: 375px, 425px
- Tablet: 768px
- Desktop: 1024px, 1920px

---

## ⚡ Verificar Performance

### No Chrome DevTools
1. `Ctrl+Shift+J` (DevTools)
2. Aba "Lighthouse"
3. Clique em "Analyze page load"

**Scores alvo:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

---

## 🚀 Deploy: Passo a Passo

### 1️⃣ Fazer Build
```bash
npm run build
```

### 2️⃣ Logar no Netlify
Vá para: https://app.netlify.com

### 3️⃣ Drag & Drop
Arraste a pasta `/dist` para a área indicada

### 4️⃣ Aguarde Deploy
Leva ~2-3 minutos

### 5️⃣ Seu Site Está Online! 🎉
Você receberá uma URL como:
`https://sua-landing-xxxxx.netlify.app`

---

## 📚 Documentação Completa

- **[README.md](./README.md)** - Overview do projeto
- **[DESENVOLVIMENTO.md](./DESENVOLVIMENTO.md)** - Guia técnico
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Design tokens
- **[DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md)** - Pré-deploy

---

## 💡 Dicas Úteis

### Editar múltiplas seções
1. Componentes estão em `src/components/`
2. Cada arquivo é independente
3. Mantenha o padrão Framer Motion

### Adicionar nova seção
1. Crie `src/components/MinhaSecao.jsx`
2. Copie estrutura de outro componente
3. Importe em `App.jsx`
4. Adicione entre outras seções

### Mudar imagens
- Coloque em pasta pública
- Importe em componentes
- Optimize em WebP

---

## 🎯 Checklist para Produção

- [ ] Rodar `npm run build` com sucesso
- [ ] Testar em mobile, tablet, desktop
- [ ] Verificar Lighthouse > 90
- [ ] Testar em Chrome, Firefox, Safari
- [ ] Executar `npm run preview`
- [ ] Fazer push para GitHub
- [ ] Deploy no Netlify
- [ ] Testar URL final em produção

---

## ❓ Problemas Comuns

**P: O site não carrega**
R: Limpe cache e reinstale dependências
```bash
rm -rf node_modules
npm install
npm run dev
```

**P: Animações lentas**
R: Verifique em DevTools → Performance

**P: Build falha**
R: Confirme Node.js >= 16
```bash
node --version
```

**P: Erro de porta**
R: 3000 em uso? Mude em `vite.config.js`:
```js
server: { port: 3001 }
```

---

## 🔗 Recursos Úteis

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)

---

## 📞 Próximas Ações

1. ✅ Rodar `npm install && npm run dev`
2. ✅ Explorar o código em `src/`
3. ✅ Editar conteúdo conforme necessário
4. ✅ Testar em diferentes resoluções
5. ✅ Fazer build e deploy!

---

**Tudo pronto! Divirta-se buildando! 🚀**

Dúvidas? Verifique os outros arquivos .md neste diretório.
