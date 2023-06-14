const NutricionistaController = require("./controllers/NutricionistaController");
const DadosNutricionista = require("./database/models/DadosNutricionista");

(async () => {
  const nutriQuery = await DadosNutricionista.findAll({ logging: false });

  const nutricionistas = nutriQuery.map((nutri) => nutri.toJSON());

  const controller = new NutricionistaController(nutricionistas);
  controller.handleMenu();
})();

