const Usuario = require("../models/users");


class UserRepository{

    static async getAll() {
        try {
          const usuarios = await Usuario.findAll();

         return usuarios;

        } catch (error) {
          throw new Error({ message: error.message });
        }
      }


      static async getOne(req){

        try {

            const {id} = req.params;
            const usuario = await Usuario.findOne({ where: { id } });
          
            if (!usuario) {
                return { message: 'Usuário não encontradoxx' };
            }
    
            return usuario;
  
          } catch (error) {
            throw new Error({ message: error.message });
          }
        
      }

      static async create(req){
        
        try {

            const { nome, email, idade } = req.body;
            const newUsuario = await Usuario.create({ nome, email, idade });       
            return newUsuario;
  
          } 
          catch (error) {            
            throw new Error(error);
          }
        
        }

        static async delete(req){
        
            try {

                const { id } = req.params;
                const deletedCount = await Usuario.destroy({ where: { id } });
                
                if (deletedCount === 0) {
                    throw new Error( 'Usuário não encontrado' );
                }

                return { message: 'Usuário Deletado com sucesso' };
        
                } 
                catch (error) {                                
                throw new Error(error);
                }
            
        }

        static async update(req){
        
            try {

                const { id } = req.params;
                const { nome, email } = req.body; 

                const usuario = await Usuario.findOne({ where: { id } });
                
                if (!usuario) {
                    throw new Error('Usuário não encontrado' );
                }

                await Usuario.update({ nome, email }, { where: { id } });
                const updatedUsuario = await Usuario.findOne({ where: { id } });
                return updatedUsuario
                
                } 
                catch (error) {                                
                throw new Error(error);
                }
            
        }
}

module.exports = UserRepository;
