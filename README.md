
###✨ Olin - Plataforma PWA###
##📋 Descrição##
Aplicação PWA para gerenciar casos, evidências, laudos e ajustes, com suporte offline e integração à API Odonto Legal.

#⚙️ Pré-requisitos#
Node.js >= 16.x

NPM ou Yarn

Editor de código (VS Code sugerido)

API Odonto Legal configurada e rodando (informar URL)

##🚀 Instalação##
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse o diretório:

bash
Copiar
Editar
cd Olin---PWA
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn
📂 Estrutura de Pastas
/public

casos/ – Cadastro e visualização de casos

dashboard/ – Painel principal

evidencias/ – Upload de evidências

historico/ – Histórico de casos

laudos/ – Geração de laudos

ajustes/ – Configurações

/js

controllers/ – Controladores

services/ – Comunicação com API (ex: api.js, auth.js)

#app.js – Inicialização do app#

##🛠️ Rodando o Projeto##
Servidor de desenvolvimento:

bash
Copiar
Editar
npm run start
# ou
yarn start
Acesse no navegador:

arduino
Copiar
Editar
http://localhost:3000
(Ajuste a porta se necessário.)

##🔗 Conexão com a API##
Configure a URL da API em services/api.js:

javascript
Copiar
Editar
const API_BASE_URL = "http://localhost:3333"; // Altere conforme seu ambiente
##✨ Funcionalidades##
Cadastro e visualização de casos

Upload de evidências

Geração de laudos em PDF

Dashboard de acompanhamento

Histórico de atividades

Autenticação e autorização de usuários

📜 Scripts Importantes

Comando	Função
npm run start	Inicia o projeto em modo de desenvolvimento
npm run build	Gera uma versão otimizada para produção
npm run lint	Verifica formatação de código (se configurado)
🛠️ Tecnologias Utilizadas
HTML5, CSS3, JavaScript

PWA Features (Service Workers e suporte offline)

Axios para requisições HTTP

(Em breve) LocalStorage e IndexedDB

📢 Observações
Este projeto está em constante evolução!

