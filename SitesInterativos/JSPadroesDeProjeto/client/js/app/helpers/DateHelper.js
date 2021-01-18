class DateHelper {
  constructor() {
    throw new Error("DateHelper não pode ser instanciada")
  }

  // ... é o spread operator, ele separa os itens do array criado ao utilizar o split e insere no constructor do date.
  // .map, passando o item e o indice do item sendo percorrido, assim se pode pegar o segundo item do array (Mês)
  // => arrow function, permite realizar função de uma instrução inline sem bloco
  // Esse bloco de texto apenas passa a data de string para um cosntructor date.
  static textoParaData(texto) {

    // Expressão regular, verificando se a data está no formato correto.
    if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
      throw new Error("Data deve estar no formato aaaa-mm-dd");
    }
    return new Date
      (...texto.split("-")
      // Corrigindo o mês
      .map((item, indice) => item - indice %2));
      // Solução possível
      //   if (indice == 1) {
      //     return item - 1;
      //   }
      //     return item;
      // })
  }

  static dataParaTexto(data){
    // Usando o template string ${} para var
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }
// O uso de static permite invocar os metodos sem instanciar a classe
}
