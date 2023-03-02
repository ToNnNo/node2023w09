// Module EcmaScript
export default class Voiture {

  #marque; // # = private
  #modele;

  constructor(marque, modele) {
    this.#marque = marque;
    this.#modele = modele;
  }

  detail() {
    return `Voiture [marque = ${this.#marque}; modele = ${this.#modele}]`;
  }
}
