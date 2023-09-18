Linha para instalar o yarn:
npm install -g yarn

para inicializaro yarn no projeto:
yarn init

configuração de dependências
yarn add express - express biblioteca que facilita
a criação de apis rest

configuração de dependências de desenvolvimento
yarn add -D typescript @types/express ts-node-dev
@types/express - faz a instalação da integração
do typescript junto com a biblioteca express
ts-node-dev: transpila o arquivo typescript para
javascript, é recomendado somente em ambiente de 
desenvolvimento não em produção, o ideal é
converter os arquivos em typescript para javascript
e depois executar

Estruturação das pastas:
criação da pasta src, dentro dela
    criar pasta server(código do sevidor), dentro 
    dela:
        criar arquivo Serve.ts código base do 
        servidor express
    criar arquivo index.ts(arquivo principal da
aplicação);

Rodando o projeto no terminal
yarn ts-node-dev ./src/index.ts

criando a estrutura do git
criar um arquivo .gitignore e colocar nele a pasta node_modules,
assim:
/node_modules

Configurando o eslint
npx eslint --init

facilitando o comando para rodar no terminal:
ir no package.json e adicionar depois de "license"
"scripts": {
    "start": "ts-node-dev ./src/index.ts"
  },
depois no terminal digitar apena:
yarn start

instalação da biblioteca status-code
yarn add http-status-codes
é responsável por exibir junto na mensagem um código que o navedor
interprete e possa exbir a resposta para o usuário
instalando o pacote de tipagem 
yarn add -D @types/http-status-code

arquivo .env:
  onde ficará as variáveis de 
  ambiente;

biblioteca para usar o arquivo .env
yarn add dotenv
colocar em Server:
import 'dotenv/config';
para poder usar as variáveis de 
ambiente 

comfigurando os arquivos typescript para javascript
yarn tsc --init
yarn tsc

jogando os arquivos em javascript numa 
pasta determinada
ir no arquivo tsconfig.json e alterar a outDir 
para:
"outDir": "./build"
e a rootDir para:
"rootDir": "./src",

rodar os arquivos javascript no terminal
node ./build/index.js

o termo KISS na programação:
keep
it
simple
stupid
mantenha isso simples e estúpido
serve no desenvolvimento de um software
para aumentar o foco, clareza e reduzir
bugs no sistema

instalação da biblioteca yup para validar
dados da requisição:
yarn add yup

Resolvendo o problema do SchemaOf:
Trocar o SchemaOf para ObjectSchema no import
poderá ter problemas na validação para o required() em parâmetros 
opcionais assim não será preciso colocar o notRequired(), pode deixar
nulo ou utilizar o optional() como solução

no Insomnia para passar os parâmetros basta colocar ? e se quiser passar mais de um parâmetro basta colocar o &:
http://localhost:3333/cidades?page=1&limit=3
é chamado de query params

Teste de Integração: tem uma cobertura que testa os endpoints, a chamada deles, controller, a inserção do dado no bando de dados e a resposta da API

instalando a biblioteca para teste:
yarn add jest ts-jest @types/jest
jest é o responsável pelos casos de teste, ações para antes da execução dos testes e verificação dos resultados esperados dos testes 
ts-jest integra o jest com o typescript

inicializando a configuração do jest no projeto:
yarn jest --init

alterando o arquivo jest.config.ts
descomentar o converageReporters e utilizar somente o json;
descomentar setupFilesAfterEnv e adicionar:
'./tests/jest.setup.ts'
e criar a pasta tests e o arquivo jest.setup.ts fora da src
descomentar testMatch e apagar o conteúdo dele e adicionar
'<rootDir>/tests/**/*.test.ts' é o local onde será encontrado os arquivos de testes

descomentar o transform: undefined
e colocar:
 transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },

instalando a biblioteca de supertest
yarn add -D supertest -D supertest @types/supertest
supertest pega o servidor em sua totalidade e o testa

adicionar no tsconfin.json 

{
  "compilerOptions": {
  },
  "exclude": [
    "./jest.config.ts",
    "./node_modules",
    "./tests",
    "./build"
  ]
}