console.log("Conversão de Tipos");

//O JS concatena strings com números e outras strings ao usar o operador +
console.log("ano" + 2020);
console.log("2" + "2");

//Ao usar o parse se converte o tipo do Valor
console.log(parseInt("2"));
console.log(parseInt("2") + parseInt("2"));

//O uso de outros operadores permite operações matemáticas com strings sem o uso do parse
console.log("10" / "2");
console.log("João" / "2");//NaN - Not a Number

//Ao declarar floats utilizar ponto e não vírgula
console.log(6.5);
console.log(6,5);
