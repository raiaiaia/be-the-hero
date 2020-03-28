const express = require('express')
const routes = require('./routes')
const cors = require('cors');

const app = express()

/**faz com que os arquivos json sejam interpretados
*o express vai no corpo da requisição e converte o json
em um objeto do JS
**/
app.use(express.json())
app.use(routes)
//todas as frontends podem acessar esse backend
//app.use(cors())



/**var corsOptions = {
*    origin: 'http://localhost:3000',
*    optionsSuccessStatus: 200
*}
*
*app.use(cors(corsOptions))
*/

//se for colocar em produção
/**app.use(cors({
*    origin: 'http://meuapp.com'
*}))
*/
app.listen(3333)

