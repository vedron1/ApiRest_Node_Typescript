import { Router } from 'express';
//importando a biblioteca http-status-code
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/teste', (req,res) => {
  return res.send('Olá dev');
});
//formas de receber dados do front-end:
//console.log(req.body);//corpo da requisição

//console.log(req.header);//parâmetros únicos com String, 
// boolean, etc

//console.log(req.params);// parâmetros que recebe no endpoint 
// valores simples. Exemplo de params
// router.post('/teste/:id', (req,res) => {
//   console.log(req.params.id);
// });

//console.log(req.query)
// na url do navedor
// router.post('/teste?teste = 123', (req,res) => {
//   console.log(req.query);
// });
//no insomnia:
// router.post('/teste', (req,res) => {
//   console.log(req.query.teste);
// });
// colocar na url do insomnia ...teste?teste=123

//console.log(req.cookies)
// router.post('/teste', (req,res) => {
//   console.log(req.cookies);
// });

// a arrow function é chamada de controller, se
// devolve uma resposta ao usuário ou manipular
// os dados para inserir algo
router.post('/teste', (req,res) => {
  console.log(req.body);
  //return res.send('Hello world');
  //return res.send(req.body);
  //json() front-end trabalhe melhor na tratando as 
  //respostas em json:
  // return res.json(req.body);
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);

});

export {router};