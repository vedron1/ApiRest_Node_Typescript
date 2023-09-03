// arquivo principal da aplicação
import { server } from './server/Server';
// colocando a porta em uma variável de ambiente
server.listen(process.env.PORT||3333, ()=> {
  console.log(`App rodando na porta ${process.env.PORT||3333}`);
});