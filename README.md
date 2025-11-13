# 📁 Sanity CMS – Administração de Conteúdo

Este diretório contém o **Sanity CMS**, utilizado para gerenciar o conteúdo dinâmico do site da **Semana Cultural Guarani**.  
A equipe pode editar **somente** as seguintes seções: **Eventos**, **Galeria** e **Notícias**.

Todo o restante do site é fixo e não deve ser alterado através do Sanity.

---

## 🚀 Seções que Podem Ser Editadas

### ✔ Eventos
- Criar novos eventos  
- Atualizar data, horário, local e descrição 

### ✔ Galeria
- Enviar novas fotos  
- Editar títulos e descrições  
- Organizar coleções  

### ✔ Notícias
- Criar novos comunicados  
- Atualizar notícias existentes  
- Adicionar imagens e links  

⚠ **Apenas essas três áreas podem ser modificadas.**

---

## 📦 Tecnologias Utilizadas
- Sanity v3  
- Node.js  
- JavaScript (ESM)  
- Sanity CLI  
- Plugins oficiais (desk, media, vision)

---
## 🔗 Integração com o Site
O conteúdo criado no Sanity é consumido pelo site por meio de:

- **Sanity Client (JavaScript)**
- **Consultas GROQ**
- **API CDN com carregamento otimizado**

Alterações nas seções liberadas refletem automaticamente no site.

---

## 🔒 Segurança
- Apenas usuários autorizados podem acessar o painel.  
- Permissões permitem alterar **somente:** Eventos, Galeria e Notícias.  
- Tokens seguros impedem modificações fora das áreas autorizadas.

---

## 📄 Licença
Este CMS faz parte do projeto oficial da **Semana Cultural Guarani**.  
Seu uso é restrito à equipe organizadora.

---

# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
