class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    // Usando o concat para criar uma copia dos dados da negociacao, para blindar os dados.
    return [].concat(this._negociacoes);
  }
}
