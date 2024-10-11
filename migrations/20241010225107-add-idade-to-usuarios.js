'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Adicionando a coluna 'idade' à tabela 'Usuarios'
    return queryInterface.addColumn('Usuarios', 'idade', {
      type: Sequelize.INTEGER,
      allowNull: true, // Definir se pode ser nulo ou não
    });
  },

  async down (queryInterface, Sequelize) {
    // Removendo a coluna 'idade' da tabela 'Usuarios' no rollback
    return queryInterface.removeColumn('Usuarios', 'idade');
  }
};
