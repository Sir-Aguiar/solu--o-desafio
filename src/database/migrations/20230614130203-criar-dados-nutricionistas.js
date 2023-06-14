"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("dados_nutricionista", {
      nome: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.TEXT,
      },
      uf: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      crn: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("dados_nutricionista");
  },
};

