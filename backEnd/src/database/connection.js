//importa o knex
const knex = require('knex')
//importa as configurações do bd
const configuration = require('../../knexfile')
/** cria a condição utilizando o knex e passa para ele o 
 *  parametro de conexão que ta no knexfile 
*/
const connection = knex(configuration.development)

module.exports = connection