const { DataTypes } = require("sequelize");
const Database = require("../database");

const DadosNutricionista = Database.define(
  "DadosNutricionista",
  {
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },
    crn: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    uf: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "dados_nutricionista",
  },
);

module.exports = DadosNutricionista;

