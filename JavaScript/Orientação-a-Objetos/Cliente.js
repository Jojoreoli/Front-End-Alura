/*BYTEBANK*/

export class Cliente {
  //public
  nome;
  //private
  _cpf;

  //Métodos acessores
  get cpf(){
    return this.cpf;
  }

  //Métodos construtores
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
