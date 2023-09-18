/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

type TProperty = 'body'|'header'|'params'|'query';

type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

// o type faz o IValidation retornar
// uma RequestHandler

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TAllSchemas = Record<TProperty, Schema<any>>;

//Partial faz que não precisa colocar os campos obrigatórios
type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
  const schemas = getAllSchemas(schema => schema);

  const errorsResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      //fazendo a validação
      //validateSync espera a validação ser realizada depois retorna
      // o resultado
      schema.validateSync(req[key as TProperty], {abortEarly: false});
    } catch (err) {
      const yupError = err as ValidationError;
      const errors: Record<string, string> = {};
      
      yupError.inner.forEach(error => {
        if(error.path === undefined) return;
        
        errors[error.path] = error.message;
      });
      errorsResult[key] = errors;
    }
  });
  
  if(Object.entries(errorsResult).length === 0){
    return next();

  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
  }
};