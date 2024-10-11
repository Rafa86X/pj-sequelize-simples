const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  idade: {
    type: DataTypes.INTEGER, // Novo campo idade
    allowNull: true,         // Define se pode ser nulo ou não
  }
});

module.exports = Usuario;
