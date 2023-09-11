import { Request, Response } from 'express';
import * as yup from 'yup';
import {validation} from '../../shared/middleware';
// controllers
// tipando a requisição e a resposta
// nota utilizar Request e Response do
// express !! 

interface ICidade {
  nome:string;
  estado: String;
}

// export const create = (req: Request, res:Response) => {
//   const data: iCidade = req.body;
//   console.log(data.nome);
//   return res.send('Create');
// };

interface IFilter {
  filter?: String;
}




// está retornando um middleware
//um middleware tem nos parâmetros
// uma req, res, next

export const createValidator = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().required().min(3),
  })),
}));

export const create = async (req: Request<{},{},ICidade>, res:Response) => {  
  console.log(req.body);
  return res.send('Create');
};