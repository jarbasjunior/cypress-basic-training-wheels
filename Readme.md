# Cypress Basic Training Wheels

  Projeto com a finalidade de mostrar os comando básicos do Cypress para interagir com elementos Web. Neste projeto foi utilizado o site [Training Wheels](https://training-wheels-qaninja.herokuapp.com/), ministrado pelo instrutor [Fernando Papito](https://www.linkedin.com/in/papitoio). Curso disponível na plataforma da [QANinja](https://www.universocypress.com.br).

---

## Índice: 📋

- [Requisitos](#requisitos)

  - [Node.js e NPM](#nodejs-e-npm)
  - [Yarn](#yarn)

- [Configuração do ambiente](#ambiente)

- [Execução dos testes](#testes)

- [Pacotes utilizados](#pacotes-utilizados)

  - [Cypress](#cypress)
  - [Cypress Real Events](#cypress-real-events)
  - [eslint](#eslint)
  - [Eslint plugin](#eslint-plugin)
  - [Husky](#husky)

---

## <a id="requisitos"/> Requisitos: ❗

* <a id="nodejs-e-npm"/> [Node.js e NPM](https://nodejs.org/en/download) - Node.js como ambiente de execução para criar e executar aplicações em Javascript. E o NPM para: instalação de pacotes, gerenciamento de versões e dependências.

* <a id="yarn"/> [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) - para instalação de pacotes, gerenciamento de versões e dependências.

## <a id="ambiente"/> Configuração do ambiente: 🛠️ </a>

* Na pasta raiz do projeto, execute o comando `yarn install`, para instalar todas as dependências do projeto.

## <a id="testes"/> Execução dos testes: 🚀 </a>

* Na pasta raiz do projeto, execute o comando `yarn test`, para abrir o Cypress e por ela executar os testes.

---
## <a id="pacotes-utilizados"/> Pacotes utilizados: 📦 📚 </a>

* <a id="cypress"/> [Cypress](https://www.cypress.io) - Como ferramenta de teste de front-end web.

  * ### Instalação do Cypress ⚙️

    - Execute o comando `yarn add cypress --save-dev` para instalar as dependências do **Cypress** na versão mais recente.

* <a id="cypress-real-events"/> [Cypress Real Events](https://github.com/dmtrKovalenko/cypress-real-events) - Como solução alternativa para utilização de mouse hover.

  * ### Instalação do Cypress Real Events ⚙️

    - Execute o comando `yarn add cypress-real-events` para instalar as dependências do **Cypress Real Events** na versão mais recente.

  * ### Instalação eslint ⚙️

    - Na pasta raiz do projeto **training-wheels**, execute o comando abaixo para instalar o eslint como uma dependência de desenvolvimento do projeto.
      ```
      yarn add eslint --save-dev
      ```
    - Na pasta raiz do projeto **training-wheels**, execute o comando `node_modules/.bin/eslint --init` abaixo para configurar o eslint, em seguida responda as seguintes perguntas abaixo, conforme respostas exibidas:

      | <center>PERGUNTA</center> | RESPOSTA |
      |-----------|:-----------:|
      | <span style="color:magenta">How would you like to use ESLint?</span> | <span style="color:cyan">To check syntax, find problems, and enforce code style</span>  |
      | <span style="color:magenta">What type of modules does your project use?</span> | <span style="color:cyan">CommonJS (require/exports)</span>  |
      | <span style="color:magenta">Which framework does your project use?</span> | <span style="color:cyan">None of these</span>  |
      | <span style="color:magenta">Does your project use TypeScript?</span> | <span style="color:cyan">No</span>  |
      | <span style="color:magenta">Where does your code run?</span> | <span style="color:cyan">Node (press `<i>` to invert selection)</span>  |
      | <span style="color:magenta">How would you like to define a style for your project?</span> | <span style="color:cyan">Use a popular style guide</span>  |
      | <span style="color:magenta">Which style guide do you want to follow?</span> | <span style="color:cyan">Airbnb: http://github.com/airbnb/javascript</span>  |
      | <span style="color:magenta">What format do you want your config file to be in?</span> | <span style="color:cyan">JSON</span>  |
      | <span style="color:magenta">Would you like to install them now with npm?</span> | <span style="color:cyan">Yes</span>  |

    - Por fim, no arquivo `package.json`, adicione na chave `scripts`, os novo scripts: 
    
      - `"check-lint": "eslint cypress/integration/**"`. Assim, quando for executado na raiz do projeto o comando `yarn run check-lint`, serão verificados todos os arquivos dentro da pasta **cypress/integration** pelo eslint.
 
      - `"fix-lint": "eslint cypress/integration/** --fix"`. Desta forma, quando for executado na raiz do projeto o comando `yarn run fix-lint`, serão corrigidas as infrações que o eslint considera como autocorrigível de acordo com o *guide* Airbnb que foi configurado anteriomente.

* <a id="eslint-plugin"/> [Eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Plugin do eslint para o VSCode.


* <a id="husky"/> [Husky](https://www.npmjs.com/package/husky) - Para realização de tarefas antes do commit, por exemplo: varredura do lint e execução dos testes.

  * ### Instalação do Husky ⚙️

    - Execute o comando `npm i husky@7.0.4 --save-dev` para instalar as dependências do **Husky** no ambiente de desenvolvimento, na versão 7.0.4 sem atualização automática no futuro.

    - Agora, execute os comandos abaixo os quais irão realizar as seguintes tarefas:
      - Criar o script `prepare` no arquivo `package.json`
      - Exeutar o script `prepare` para ativar o *hook* no *git*
      - Criar o arquivo `pre-commit`, no qual serão gravadas pelo **Husky** as tarefas a serem realizadas antes do *commit*.
        ```
        npm pkg set scripts.prepare="husky install" &&
        npm run prepare &&
        npx husky add .husky/pre-commit "npm run lint-check" &&
        git add .husky/pre-commit
        ```
