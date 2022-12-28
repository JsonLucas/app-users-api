# App Users 

Projeto construído com [NodeJS](https://nodejs.org/docs/latest-v17.x/api/) v17.9.1.

# Dependências

- Gerenciador de pacotes **(npm ou yarn)**
- [Postgres](https://www.postgresql.org/download/)
- [Docker](https://www.docker.com/products/docker-desktop/)

# Setup do projeto

* Abra o terminal na raíz do projeto e execute o comando `yarn` ou `npm i` para instalar as dependências. Para rodar o projeto com **Docker**, apenas execute o comando `docker-compose up`.
* Altere o nome do arquivo `.env.example` para `.env` e preencha as variáveis.
* Rode o comando `yarn build` para compilar o projeto e `yarn start` para rodar o projeto ou `yarn dev` para rodar em modo desenvolvimento.

# Setup do banco de dados

* Navegue até a pasta `database`, procure pelo arquivo `db.sql` e copie o script.
* Abra o programa [`pgAdmin`](https://www.pgadmin.org/download/),
* Clique na guia `Servers` e clique com o botão direito do mouse em `PostgreSQL xx` e crie um novo banco de dados.
* Ainda nessa guia, procure pelo banco que foi criado, clique com o botão direito no mouse nele e selecione `Query tool`.
* Cole o script copiado na caixa de texto e execute o comando no botão `▶️`.

# Setup do banco de dados com WSL
- [Instalação do postgres](https://learn.microsoft.com/pt-br/windows/wsl/tutorials/wsl-database#install-postgresql)
- [Instalação do pgadmin](https://www.pgadmin.org/download/pgadmin-4-apt/)