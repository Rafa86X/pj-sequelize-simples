const { Router } = require('express');
const UserController = require('../controller/usuarioController.js')

const router = Router();

router.get('/usuarios', UserController.getAll)
      .get('/usuarios/:id', UserController.getOne)
      .post('/usuarios',UserController.create)
      .put('/usuarios/:id',UserController.update)
      .delete('/usuarios/:id',UserController.delete)

module.exports = router;