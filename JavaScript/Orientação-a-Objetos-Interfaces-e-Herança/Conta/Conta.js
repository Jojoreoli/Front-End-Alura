/*BYTEBANK*/

export class Conta {
  constructor(cliente, agencia, saldoInicial){
    if(this.constructor == Conta){
      throw new Error("Instanciamento de conta inválido");
    }
    this._cliente = cliente;
    this._agencia = agencia;
    this._saldo = saldoInicial;
  }

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

  sacar(valor){
    throw new Error("O método Sacar da Conta.js é abstrato. Subscreva o método Sacar da conta correta.")
  }

  _sacar(valor, taxa){
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor){
    if(valor <= 100){
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
