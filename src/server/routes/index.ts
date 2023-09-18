import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import {PessoasController} from './../controllers';

const router = Router();

router.get('/', (req,res) => {
  return res.send('Olá dev');
});

router.post(
  '/pessoas', 
  //PessoasController.createValidator, 
  PessoasController.create
);

export {router};