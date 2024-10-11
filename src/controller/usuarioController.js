const Usuario = require("../models/users");
const UserRepository = require("../repository/usuarioRepository.js")


class UserController {
  
  static async getAll(req, res) {
    try {

      const dados = await UserRepository.getAll();

      return res.status(200).json(dados);

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getOne (req, res){

    try {
        const dados = await UserRepository.getOne(req);
        return res.status(200).json(dados);
    } catch (error) {
        return res.status(404).json(error.message);
    }
}

static async create(req, res) {
    try {

      const dados = await UserRepository.create(req);
      return res.status(201).json(dados);

    } catch (error) {       
      return res.status(400).json({ message: error.message });
    }
  }


  

static async delete(req, res) {
    try {
        
        const dados = await UserRepository.delete(req);

        return res.status(200).json(dados);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }


  static async update(req, res) {
    try {
      
      const dados = await UserRepository.update(req);  
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

}

module.exports = UserController;
