console.log(`Trabalhando com condicionais`);

//Criando o array de destinos
const listaDeDestinos = new Array (
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
)

//Declarando variáveis
const idadeDoComprador = 10;
const estaAcompanhada = true;

//Imprimindo o array
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

//Aplicando a regra condicional
if (idadeDoComprador >= 18) {
  console.log("Cliente maior de idade.");
  listaDeDestinos.splice(1,1);
}
else if (estaAcompanhada){
  console.log("Cliente acompanhado por maior de idade.");
  listaDeDestinos.splice(1,1);
}
else{
  console.log("Cliente menor de idade, venda proibida.");
}

//Encadeando condicionais. Operadores: ou ||; e &&; não !
if (idadeDoComprador >=18 || estaAcompanhada){
  console.log("Boa viagem!");
}

//Verificando os destinos não comprados
console.log(listaDeDestinos);

//Verificação booleana condicional
console.log(idadeDoComprador > 18);
console.log(idadeDoComprador < 18);
console.log(idadeDoComprador >= 18);
console.log(idadeDoComprador <= 18);
console.log(idadeDoComprador == 18);
