const { keyInSelect, question, questionInt } = require("readline-sync");

class MenuView {
  static renderMenu(options) {
    return keyInSelect(options, "Digite a opção desejada", {
      cancel: "Sair do programa",
    });
  }
  static renderDeleteMenu() {
    const nome = question("Qual o nome do nutricionista a se remover: ");
    return new Promise((resolve, reject) => {
      if (!nome) return reject(new Error("Insira dados inválidos!"));
      return resolve(nome);
    });
  }
  static async renderAddMenu() {
    const nome = question("Insira o nome: ");
    const crn = question("Insira o CRN: ");
    const uf = question("Insira a UF: ");
    return new Promise((resolve, reject) => {
      if (!nome || !crn || !uf) {
        return reject(new Error("Os dados inseridos são inválidos! Insira os dados corretamente"));
      }

      return resolve({ nome, crn, uf });
    });
  }
  static async renderUpdateMenu(nutricionista) {
    if (nutricionista) {
      const newName = question(`Novo nome (Caso não deseje modificar, deixe vazio): `, {
        defaultInput: nutricionista.nome,
      });
      const newCrn = question(`Novo CRN (Caso não deseje modificar, deixe vazio): `, {
        defaultInput: nutricionista.crn,
      });
      const newUF = question(`Nova UF (Caso não deseje modificar, deixe vazio): `, { defaultInput: nutricionista.uf });
      
      return new Promise((resolve, reject) => {
        if (!newName || !newCrn || !newUF) return reject("Insira dados válidos!");
        return resolve({ nome: newName, crn: newCrn, uf: newUF });
      });
    }
    const nome = question("Insira o nome do nutricionista que deseja modificar: ");

    return new Promise((resolve, reject) => {
      if (!nome) return reject(new Error("Insira dados válidos!"));
      resolve(nome);
    });
  }
}

module.exports = MenuView;

