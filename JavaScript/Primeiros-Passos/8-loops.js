console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array (
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
)

//Declarando variáveis
const idadeDoComprador = 10;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";
let destinoExiste = false;

//Imprimindo o array
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

//Aplicando a regra condicional
const podeComprar = idadeDoComprador >= 18 || estaAcompanhada == true;

//Estrutura de repetição
let contador = 0;
while (contador < 3){
  if (listaDeDestinos[contador] == destino){
    destinoExiste = true;
    break;
  }
  contador += 1;
}

//Imprimindo os resultados
console.log("Destino existe: ", destinoExiste);
if (podeComprar && destinoExiste){
  console.log("Boa Viagem!");
}
else {
  console.log("Ocorreu um erro.");
}

//Estrutura de um For
for (let i = 0; i < 3; i += 1){
  console.log(i);
}
