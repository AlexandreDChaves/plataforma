# Plataforma de Perguntas e Respostas

Este projeto é uma plataforma simples de perguntas e respostas, onde os usuários podem fazer perguntas, responder a perguntas existentes e visualizar respostas. Foi desenvolvido como parte de um estudo prático de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3 (Bootstrap para estilização)
  - EJS (Embedded JavaScript) para templates dinâmicos

- **Backend:**
  - Node.js
  - Express.js (Framework para criar o servidor)
  - MySQL (Banco de dados para armazenar perguntas e respostas)
  - Sequelize (ORM para interação com o banco de dados)
  - body-parser: Middleware para analisar o corpo das requisições HTTP.

- **Outras Ferramentas:**
  - NPM (Gerenciador de pacotes)
  - Git (Controle de versão)

## 📋 Funcionalidades

- **Fazer Perguntas:** Os usuários podem criar novas perguntas.
- **Responder Perguntas:** Os usuários podem responder a perguntas existentes.
- **Visualizar Respostas:** Todas as respostas de uma pergunta são exibidas em uma página de detalhes.
- **Interface Simples:** Design limpo e responsivo, utilizando Bootstrap.

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o projeto no seu ambiente local.

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- MySQL instalado e configurado
- Git instalado (opcional, mas recomendado)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/AlexandreDChaves/plataforma.git
   cd plataforma

2. **Instale as dependências:**
   ```bash
   npm install

3. **Configure o banco de dados:**
    Crie um banco de dados MySQL chamado plataforma.
    Importe o arquivo SQL localizado em database/schema.sql para criar as tabelas necessárias.

4. **Configure as variáveis de ambiente:**
    Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

    DB_HOST=localhost
    DB_USER=seu_usuario_mysql
    DB_PASSWORD=sua_senha_mysql
    DB_NAME=plataforma
    PORT=3000

5. **Inicie o servidor:**
    npm start

6. **Acesse a aplicação:**
    Abra o navegador e acesse http://localhost:3000
