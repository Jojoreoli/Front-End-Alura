/*BYTEBANK*/

export class Cliente {
  //Métodos acessores
  get cpf(){
    return this.cpf;
  }

  //Métodos construtores
  //Boa prática declarar dentro do construtor
  constructor(nome, cpf, senha) {
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  }
  
  //Método autenticar
  autenticar(){
    return true;
  }
}
