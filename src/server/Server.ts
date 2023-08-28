// código base do servidor express
import express from 'express';

const server = express();

//método http
server.get('/',(req,res)=>{
    return res.send('Olá, dev!')
});

export {server};