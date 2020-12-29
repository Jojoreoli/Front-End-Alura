console.log(`Trabalhando com listas`);

//Declarando destinos da lista
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

//Lista de destinos feita sem uso de Array. Errada, não suporta crescimento.
console.log("Destinos possíveis: ");
console.log(salvador, saoPaulo, rioDeJaneiro);

/*Declarando um array. Apesar de ser const, é possível mudar os elementos
da lista, mas não a lista em si, logo fazer um listaDeDestinos = 2 acabaria em erro*/
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

//Imprimindo um array
console.log(listaDeDestinos);

//Inserindo itens no array dinâmicamente
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);

/*Removendo um item do Array. Ao usar o splice, se deve passar a posição
inicial, e o número de elementos a serem deletados*/
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//Exibindo elementos específicos do Array
console.log(listaDeDestinos[1], listaDeDestinos[0]);
