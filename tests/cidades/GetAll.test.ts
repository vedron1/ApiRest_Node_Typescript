import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', async() => {
  const rest1 = await testServer
    .post('/cidades')
    .send({nome: 'São PAulo'});
  
  expect(rest1.statusCode).toEqual(StatusCodes.CREATED);

  const resBuscada = await testServer
    .get('/cidades')
    .send();

  expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
  expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
  expect(resBuscada.body.length).toBeGreaterThan(0);
});