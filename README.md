## ✨ Olin - Plataforma PWA
# Aplicação PWA para gerenciar casos, evidências, laudos e ajustes, com suporte offline e integração à API Odonto Legal.
⚙️ Pré-requisitos

Node.js >= 16.x
NPM ou Yarn
Editor de código (VS Code sugerido)
API Odonto Legal configurada e rodando


## 🚀 Instalação
bash Clone o repositório
git clone (https://github.com/odontolegal/Olin---PWA.git)


# Acesse o diretório
cd Olin---PWA


# Instale as dependências
npm install
yarn


## 📂 Estrutura de Pastas


#/public


casos/ – Cadastro e visualização de casos
dashboard/ – Painel principal
evidencias/ – Upload de evidências
historico/ – Histórico de casos
laudos/ – Geração de laudos
ajustes/ – Configurações


#/js

controllers/ – Controladores
services/ – Comunicação com API
app.js – Inicialização do app


## 🛠️ Rodando o Projeto

# Servidor de desenvolvimento
npm run start
Acesse no navegador: http://localhost:3000
🔗 Conexão com a API
Configure a URL da API em services/api.js:
javascriptconst API_BASE_URL = "http://localhost:3333"; // Altere conforme seu ambiente


##✨ Funcionalidades


Cadastro e visualização de casos
Upload de evidências
Geração de laudos em PDF
Dashboard de acompanhamento
Histórico de atividades
Autenticação e autorização de usuários


📜 Scripts Importantes
ComandoFunçãonpm run startInicia o projeto em modo de desenvolvimentonpm run buildGera uma versão otimizada para produçãonpm run lintVerifica formatação de código (se configurado)


#🛠️ Tecnologias Utilizadas


 HTML5, CSS3, JavaScript
 PWA Features (Service Workers e suporte offline)
 Axios para requisições HTTP
 LocalStorage e IndexedDB (em implementação)


# 📢 Observação: Este projeto está em constante evolução!
