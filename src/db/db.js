const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_aula', 'root', '12345', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;
