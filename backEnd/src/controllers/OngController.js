//conexão com o BD
const connection = require('../database/connection')
/** Pacote do node utilizado para criptografia
 * mas que pode utilizar um metodo dele que 
 * gera uma string aleatório
 */
const crypto = require('crypto')
module.exports = {
    //função que lista as ongs
    async index(req, res){
        //selecionar todos os registros da tabela ongs
       const ongs = await connection('ongs').select('*')
    
       return res.json(ongs)
    },
    //async é funcão assincrona
    //função que cria as ongs
    async create(req, res){
        const {name, email, whatsapp, city, uf} = req.body
    
        //gera 4 bytes de caracteres aleatórios
        const id = crypto.randomBytes(4).toString('HEX')
        
        //await vai esperar connection finalizar pra continuar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        //console.log({name, email, whatsapp, city, uf})
        
        return res.json({id})
     
    }
}