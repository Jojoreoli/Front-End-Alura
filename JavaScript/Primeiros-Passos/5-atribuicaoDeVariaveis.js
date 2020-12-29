console.log("Trabalhando com atribuição de variáveis");

//Declarando variáveis, consts são imutáveis, diferente de lets
const idade = 24;
let nome = "João Pedro";
const primeiroNome = "João Pedro";
const sobrenome = "Reis";

//Maneiras de concatenar
console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);

//Interpolação de variáveis
console.log(`Meu nome é ${nome} ${sobrenome}`);

//Sobrescrevendo a variável
nome = nome + sobrenome;
console.log(nome);

//Evitar variações de estado em variáveis, utilizar constantes, com nomes específicos
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);
