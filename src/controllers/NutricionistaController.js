const MenuView = require("../views/MenuView");
const NutricionistasView = require("../views/NutricionistasView");
// model
const DadosNutricionistas = require("../database/models/DadosNutricionista");

class NutricionistaController {
  constructor(nutricionistas) {
    this.nutriView = new NutricionistasView(nutricionistas);
  }

  async updateNutricionistaView() {
    const nutriData = (await DadosNutricionistas.findAll({ logging: false })).map((nutri) => nutri.toJSON());
    this.nutriView = new NutricionistasView(nutriData);
  }

  async handleMenu() {
    const choice = MenuView.renderMenu([
      "Inserir nutricionista",
      "Listar nutricionistas",
      "Deletar Nutricionistas",
      "Atualizar nutricionista",
    ]);
    console.clear();
    if (choice == 0) await this.adicionarNutricionista();
    if (choice == 1) await this.listarNutricionista();
    if (choice == 2) await this.deletarNutricionista();
    if (choice == 3) await this.atualizarNutricionista();
  }

  loadMenu(timing = 1500) {
    setTimeout(() => {
      console.clear();
      this.handleMenu();
    }, timing);
  }

  async listarNutricionista() {
    console.clear();
    this.nutriView.renderAll();
    this.handleMenu();
  }

  async adicionarNutricionista() {
    try {
      console.clear();
      const { nome, crn, uf } = await MenuView.renderAddMenu();
      await DadosNutricionistas.create({ nome, crn, uf }, { logging: false });
      await this.updateNutricionistaView();
      console.clear();
      console.log("Nutricionista adicionado com sucesso!");
      this.loadMenu();
    } catch (error) {
      console.log(error.message);
      this.loadMenu();
    }
  }

  async deletarNutricionista() {
    try {
      console.clear();
      const nome = await MenuView.renderDeleteMenu();
      await DadosNutricionistas.destroy({ where: { nome: nome }, logging: false });
      await this.updateNutricionistaView();
      console.clear();
      console.log("Nutricionista deletado com sucesso");
      this.loadMenu();
    } catch (error) {
      console.log(error.message);
      this.loadMenu();
    }
  }

  async atualizarNutricionista() {
    try {
      const nutriName = await MenuView.renderUpdateMenu();
      const foundNutri = (
        await DadosNutricionistas.findByPk(nutriName, {
          logging: false,
        })
      ).toJSON();
      
      const { nome, crn, uf } = await MenuView.renderUpdateMenu(foundNutri);
      await DadosNutricionistas.update({ nome, crn, uf }, { where: { nome: nutriName }, logging: false });
      await this.updateNutricionistaView();
      console.clear();
      console.log("Atualizado com sucesso!");
      this.loadMenu();
    } catch (error) {
      console.log(error.message);
      this.loadMenu();
    }
  }
}

module.exports = NutricionistaController;

