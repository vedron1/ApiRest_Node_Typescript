import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import {CidadesController} from './../controllers';

const router = Router();

router.get('/', (req,res) => {
  return res.send('Olá dev');
});

router.get(
  '/cidades', 
  CidadesController.getAllValidation, 
  CidadesController.getAll
);

router.get(
  '/cidades/:id',
  CidadesController.getByIdValidation,
  CidadesController.getById
);

router.post(
  '/cidades', 
  CidadesController.createValidator, 
  CidadesController.create
);
  

router.put(
  '/cidades/:id',
  CidadesController.updateByIdValidation,
  CidadesController.updateById
);

router.delete(
  '/cidades/:id',
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById
);

export {router};