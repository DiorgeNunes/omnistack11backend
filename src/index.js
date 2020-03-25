const express = require ('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors()) 
app.use(express.json())
app.use(routes)

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do Backend
  * POST: Criar uma informação no Backend
  * PUT: Editar uma informação do Backend
  * DELETE: Apagar uma informação do Backend
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: parâmentros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: parâmetros utilizados apara identificar recursos
   * Request Body: 
   */

  /**
   * Modos para conectar o banco de dados:
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */


app.listen(3333)