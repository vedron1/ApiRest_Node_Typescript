import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {

  it('Criar um registro', async () => {
    const rest1 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias'});
    
    expect(rest1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof rest1.body).toEqual('number');
  });

  it('Tenta Criar um registro com um nome muito curto', async () => {
    const rest1 = await testServer
      .post('/cidades')
      .send({ nome: 'Ca'});
    
    expect(rest1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(typeof rest1.body).toHaveProperty('errors.body.nome');    
  });

});