class Negociacao {

  constructor(data, quantidade, valor) {
    // Programação defensiva
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    // Congelando o objeto. Freeze é raso, congela apenas as propriedades do objeto
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    // Programação defensiva. Criando uma nova data externa
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
