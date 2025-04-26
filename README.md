**Olin - Plataforma PWA**
*Descrição:*
Aplicação Progressive Web App (PWA) desenvolvida para gerenciar casos, evidências, laudos e ajustes em ambiente web, com suporte offline e integração à API do Odonto Legal.

*Pré-requisitos*
Node.js >= 16.x

**NPM ou Yarn**

Editor de código (sugestão: VS Code)

*API Odonto Legal configurada e rodando (necessário URL da API)*

**Instalação**
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
Instale as dependências ():

bash
Copiar
Editar
npm install
ou

bash
Copiar
Editar
yarn
Estrutura de Pastas
/public

casos/ – Cadastro e visualização de casos

dashboard/ – Painel principal da plataforma

evidencias/ – Upload de evidências

historico/ – Histórico de casos

laudos/ – Geração de laudos

ajustes/ – Página de ajustes e configurações

/js

controllers/ – Controladores de fluxo de dados

services/ – Serviços de comunicação com a API (ex: api.js, auth.js, etc.)

app.js – Arquivo principal de inicialização do app

**Como Rodar o Projeto**
Rode o servidor de desenvolvimento:

bash
Copiar
Editar
npm run start
ou

bash
Copiar
Editar
yarn start
Acesse no navegador:

bash
Copiar
Editar
*http://localhost:3000*
(A porta pode variar dependendo do seu setup. Ajuste conforme necessário.)

*Conexão com a API*
A comunicação com a API é realizada principalmente via services/api.js e services/auth.js.
Certifique-se de alterar a URL base da API conforme seu ambiente de desenvolvimento.

Exemplo no api.js:

javascript
Copiar
Editar
const API_BASE_URL = "http://localhost:3333"; // URL da API Odonto Legal
Para produção, basta atualizar essa URL para o endpoint da API hospedada.

**Funcionalidades Principais**
Cadastro de casos

Visualização de banco de casos

Upload de evidências

Geração de laudos em PDF

Dashboard de acompanhamento

Histórico de atividades

Autenticação e autorização de usuários

*Scripts Importantes*

Comando	Descrição
npm run start	Inicia o projeto em modo de desenvolvimento
npm run build	Gera uma versão otimizada para produção
npm run lint	Verifica problemas de formatação no código (se configurado)
Tecnologias Utilizadas
HTML5, CSS3, JavaScript

PWA (Progressive Web App) Features

Axios para requisições HTTP

Service Workers para suporte offline

LocalStorage e IndexedDB (em breve)

*Observações*
Este projeto está em desenvolvimento constante. Novas funcionalidades estão sendo planejadas, como:

Modo dark

Melhorias de acessibilidade (WCAG)

Cache de páginas com Workbox

Caso encontre algum bug ou deseje sugerir melhorias, sinta-se à vontade para abrir uma iss
