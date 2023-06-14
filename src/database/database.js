const { Sequelize } = require("sequelize");
const CONFIGURATION = require("./config/configuration");

// Conexão
const Database = new Sequelize(CONFIGURATION);

module.exports = Database;
