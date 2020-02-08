# bootcamp-gostack-desafio-01
CRUD em Array utilizando NodeJS

Desafio 01 do Bootcamp GoStack da RocketSeat.
https://github.com/Rocketseat/bootcamp-gostack-desafio-01

## Requisitos

**Node.js:** [https://nodejs.org/en/](https://nodejs.org/en/)

**Yarn:** [https://yarnpkg.com/lang/en/](https://yarnpkg.com/lang/en/)

Verificar se foi instalado:

_**node -v**_

_**yarn -v**_

**Visual Studio Code:** [https://code.visualstudio.com/](https://code.visualstudio.com/)

## Tecnologias

- **NodeJS**

## Pacotes e Bibliotecas Necessárias

Adição package.json: ***yarn init -y***

Adição node_modules e yarn.lock: ***yarn add express***

Atualização de página automaticamente (-D somente desenvolvimento): ***yarn add nodemon -D***

## Requisições (Exemplos)

http://localhost:3000

**Buscar Projetos**

GET: localhost:3000/projects

Cadastrar Projeto
POST: localhost:3000/projects
JSON:
{
	"id": "1",
	"title": "Tate no Yuusha"
}

**Atualizar Projeto**

PUT: localhost:3000/projects/1

JSON:
{
	"title": "Ovelord"
}

**Remover Projeto:**

DELETE: localhost:3000/projects/1

**Cadastrar Tarefa do Projeto**

POST: localhost:3000/projects/9/tasks

JSON:
{
	"title": "Capitulo 02"
}

## Testar o Projeto

Necessário executar o comando: ***yarn dev*** (script no package.json) ou ***node index.js***

## Baixar o Projeto

Para a utilização do projeto é necessário clonar informando o comando abaixo.

**git clone https://github.com/dougglas1/bootcamp-gostack-desafio-01.git**
