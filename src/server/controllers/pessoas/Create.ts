import { Request, Response } from 'express';
import * as yup from 'yup';
import {validation} from '../../shared/middlewares';
// controllers
// tipando a requisição e a resposta
// nota utilizar Request e Response do
// express !! 

interface IPessoa{
  email:string;
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
  body: getSchema<IPessoa>(yup.object().shape({
    email: yup.string().required().min(3),
  })),
}));

export const create = async (req: Request<{},{},IPessoa>, res:Response) => {  
  console.log(req.body);
  return res.send('Create');
};