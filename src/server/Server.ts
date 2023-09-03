// código base do servidor express
import express from 'express';

//poder utilizar as variáveis de ambiente no projeto
import 'dotenv/config';

import  { router } from './routes';

//instãncia do express
const server = express();

// fala com o servidor para trabalhar com body de json
server.use(express.json());

//server utilizando as rotas
server.use(router);

export {server};