import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
// controllers
// tipando a requisição e a resposta
// nota utilizar Request e Response do
// express !! 

interface ICidade {
  nome:string;

}

// export const create = (req: Request, res:Response) => {
//   const data: iCidade = req.body;
//   console.log(data.nome);
//   return res.send('Create');
// };

//criando a constante de validação do yup
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export const create = async (req: Request<{},{},ICidade>, res:Response) => {
  let validatedData: ICidade | undefined = undefined;
  try {
    //fazendo a validação
    validatedData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.json({
      errors: {
        default: yupError.message,
      }
    });
  }
  console.log(validatedData);
  return res.send('Create');
};