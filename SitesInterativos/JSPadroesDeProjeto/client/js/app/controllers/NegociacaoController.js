class NegociacaoController {

  constructor() {
    // Criando um alias para o método. Necessario usar o bind para manter a associação do querySelector
    const $ = document.querySelector.bind(document);
    // Ao colocar os inputs no constructor, o DOM só é percorrido na criação da classe.
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($("#negociacoesView"));

    this._negociacoesView.update(this._listaNegociacoes);
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($("#mensagemView"));
    this._mensagemView.update(this._mensagem);

  }

  adiciona(event) {
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = "Negociação adicionada com sucesso";
    
    this._negociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);
  }

  _criaNegociacao() {
    // Instanciando negociacao
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {

    this._inputData.value = "";
    this._inputValor.value = 1;
    this._inputQuantidade.value = 0.0;

    this._inputData.focus();
  }
}
