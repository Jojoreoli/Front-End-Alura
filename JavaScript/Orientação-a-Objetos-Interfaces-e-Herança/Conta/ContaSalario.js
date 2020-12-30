import {Conta} from "./Conta.js"

export class ContaSalario extends Conta{
  constructor(cliente){
    super(cliente, 0, 200);
  }

  sacar(valor){
    let taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}
