"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
// código base do servidor express
const express_1 = __importDefault(require("express"));
//poder utilizar as variáveis de ambiente no projeto
require("dotenv/config");
require("./shared/services/TranslationsYup");
const routes_1 = require("./routes");
//instãncia do express
const server = (0, express_1.default)();
exports.server = server;
// fala com o servidor para trabalhar com body de json
server.use(express_1.default.json());
//server utilizando as rotas
server.use(routes_1.router);
