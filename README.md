## ✨ Olin - Plataforma PWA
# Aplicação PWA para gerenciar casos, evidências, laudos e ajustes, com suporte offline e integração à API Odonto Legal.
# ⚙️ Pré-requisitos

Node.js >= 16.x
NPM ou Yarn
Editor de código (VS Code sugerido)
API Odonto Legal configurada e rodando

## 🚀 Instalação
bash# Clone o repositório
git clone https://github.com/odontolegal/Olin---PWA.git

# Acesse o diretório
cd Olin---PWA

# Instale as dependências
npm install
# ou
yarn
📂 Estrutura de Pastas
/public

ajustes/ – Configurações do sistema
bancocasos/ – Interface com banco de dados de casos
casos/ – Cadastro e visualização de casos
css/ – Folhas de estilo
dashboard/ – Painel principal do usuário
evidencias/ – Upload e gerenciamento de evidências
historico/ – Histórico de casos e atividades
js/ – Scripts de funcionamento
laudos/ – Geração e visualização de laudos
login/ – Sistema de autenticação
usuario/ – Gerenciamento de perfis
index.html – Página principal
manifest.json – Configuração do PWA
service-worker.js – Suporte offline e cache

/js

controllers/ – Controladores de interface
services/ – Comunicação com API
app.js – Inicialização do app

## 🛠️ Rodando o Projeto
bash# Servidor de desenvolvimento
npm run start
Acesse no navegador: http://localhost:3000
# 🔗 Conexão com a API
Configure a URL da API em services/api.js:
javascriptconst API_BASE_URL = "http://localhost:3333"; // Altere conforme seu ambiente
## ✨ Funcionalidades

Cadastro e visualização de casos
Upload de evidências com categorização
Geração de laudos em PDF
Dashboard interativo de acompanhamento
Histórico detalhado de atividades
Autenticação e autorização de usuários
Suporte para funcionamento offline
Sincronização inteligente quando online

📜 Scripts Importantes
ComandoFunçãonpm run startInicia o projeto em modo de desenvolvimentonpm run buildGera uma versão otimizada para produçãonpm run lintVerifica formatação de código (se configurado)
## 🛠️ Tecnologias Utilizadas

HTML5, CSS3, JavaScript
PWA Features (Service Workers e suporte offline)
Axios para requisições HTTP
LocalStorage e IndexedDB para armazenamento local

## 👥 Fluxo de Usuários
O sistema suporta três perfis principais conforme identificado no diagrama de classes:

Administrador: Acesso total a todas as funcionalidades
Perito: Gerencia casos, laudos e relatórios
Assistente: Contribui com evidências e visualiza casos compartilhados

## 🔄 Fluxo de Trabalho

Login no sistema
Acesso ao dashboard principal
Criação ou seleção de casos
Upload de evidências relacionadas
Elaboração de laudos técnicos
Geração de relatórios detalhados
Compartilhamento de informações entre usuários autorizados

## 📱 Recursos PWA

Instalação na tela inicial de dispositivos
Funcionamento offline com dados cacheados
Sincronização automática quando conexão é restabelecida
Notificações push (em implementação)

## 📢 Observação
Este projeto está em constante evolução!
