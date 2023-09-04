"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// arquivo principal da aplicação
const Server_1 = require("./server/Server");
// colocando a porta em uma variável de ambiente
Server_1.server.listen(process.env.PORT || 3333, () => {
    console.log(`App rodando na porta ${process.env.PORT || 3333}`);
});
