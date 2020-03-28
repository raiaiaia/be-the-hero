const connection = require('../database/connection')

module.exports = {
    async index(req, res){

      const {page = 1} = req.query

     //conta o numero de casos cadastrados
      const [count] = await connection('incidents').count()

     //console.log(count)

      //limita os dados para 5 registros
      //pula 5 registros por pagina
      //-1 porque setou que page era 1 como "default"
      const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page-1)*5)
      .select('*')
      /** .select([
      *'incidents.*',
      *'ongs.name',
      *'ongs.email',
      *'ongs.whatsapp',
      *'ongs.city',
      *'ongs.uf'
    ])*/
      //manda pro headers o total de casos
      res.header('X-Total-Count', count['count(*)'])

      return res.json(incidents)
     
    },

    async create(req,res){
        const {title, description, value} = req.body
        const ong_id = req.headers.authorization

        const [id] = await connection('incidents'). insert({
            title, 
            description,
            value,
            ong_id
        })
         return res.json({id})
    },

    async delete(req, res){
        const { id }  = req.params
        //verificar se o incidente foi criado pela ong que ta tentando deletar
        const ong_id = req.headers.authorization

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

        if(incident.ong_id != ong_id){
          return res.status(401).json({error: 'Operation not permited.'}) 
        }

        await connection('incidents').where('id', id).delete()

        return res.status(204).send()
    }
}
