//o metodo up é responsavel pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
    table.string('id').primary ()
    table.string('name').notNullable() 
    table.string('email').notNullable() 
    table.string('whatsapp').notNullable() 
    table.string('city').notNullable() 
    //setando o tamanho da string para 2
    table.string('uf', 2).notNullable() 
    })
  };
   
  //caso precise voltar atrás e deletar a tabela
  exports.down = function(knex) {
   knex.schema.dropTable('ongs')
  };
  