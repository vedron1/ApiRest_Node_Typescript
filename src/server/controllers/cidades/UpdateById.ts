import { validation } from '../../shared/middleware';
import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number,
}

interface IBodyProps {
  nome: string,
}

export const updateByIdValidation = validation(getShcema => ({
  body: getShcema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getShcema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) =>{
  console.log(req.params);
  console.log(req.body);
  
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};