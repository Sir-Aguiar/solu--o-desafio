class NutricionistasView {
  constructor(nutricionistas) {
    this.nutricionistas = nutricionistas;
  }
  renderAll() {
    console.log("_______________________________________________\n");
    console.log("Nutricionistas:");
    console.table(this.nutricionistas, ["nome", "crn", "uf"]);
    console.log("_______________________________________________\n");
  }
}

module.exports = NutricionistasView;

