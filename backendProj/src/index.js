const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);





















/**
 *  MÉTODOS HTTP
 * GET: Buscar/LISTAR uma informação no back-end
 * POST:Criar uma infromação no back-end 
 * PUT: Alterar uma informação no back-end 
 * DELETE: Deletar uma informação no back-end
 * 
 * */
/**
 * TIOPS DE PARÂMETROS:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (FIltros, paginação)
 * Route Paraams: Parâmetros utiliazados para identificar recursos
 * Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos 
 * 
 */