import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';
describe('Cidades - DeleteById', () => {

  it('Apaga registro', async() => {
    const rest1 = await testServer
      .post('/cidades')
      .send({nome: 'Caxias do Sul'});
    
    expect(rest1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer
      .delete(`/cidades/${rest1.body}`)
      .send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Apaga registro que não existe', async () => {

    const rest1 = await testServer
      .delete('/cidades/99999')
      .send();

    expect(rest1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(rest1.body).toHaveProperty('errors.default');
  });
});