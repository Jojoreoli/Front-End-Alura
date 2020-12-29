/*BYTEBANK*/
//Importando classes
import {Cliente} from "./Cliente.js"

export class ContaCorrente {
  //static
  static numeroDeContas = 0;
  //public
  agencia;
  //private
  _cliente;
  _saldo = 0; //#saldo seria o atributo realmente privado

  //Métodos acessores
  set cliente(pessoa){
    if(pessoa instanceof Cliente){
      this._cliente = pessoa;
    }
  }

  get cliente(){
    return this._cliente;
  }

  get saldo(){
    return this._saldo;
  }

  //Métodos construtores
  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  //Criando métodos
  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor){
    if(valor <= 0){
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
