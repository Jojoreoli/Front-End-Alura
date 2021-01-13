console.log("Olá Mundo!");

// Document, passa todo o documento HTML para o JS
console.log(document);

// QuerySelector encontra o elemento passado.
let titulo = document.querySelector(".titulo");

// TextContent pega o conteúdo dentro da tag.
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

// Criando o array de pacientes
const arrayPacientes = document.querySelectorAll(".paciente");

// Entrando no loop
for (var i = 0; i < arrayPacientes.length; i++) {
  // Calculando o IMC
  // -
  // Pegando os valores
  const paciente = arrayPacientes[i];
  const tdPeso = paciente.querySelector(".info-peso");
  const peso = tdPeso.textContent;
  const tdAltura = paciente.querySelector(".info-altura");
  const altura = tdAltura.textContent;
  const tdImc = paciente.querySelector(".info-imc");
  // Verificando se os valores são válidos
  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if(!pesoValido){
    console.log("Peso invalido");
    pesoValido = false;
    tdImc.textContent = "Peso Invalido"
    // .style.propriedade permite manipular elementos de estilo
    // Usar camelCase
    paciente.style.backgroundColor = "lightcoral";
  }
  if (!alturaValida) {
    console.log("Altura invalida");
    alturaValida = false;
    tdImc.textContent = "Altura Invalida"
    // Jeito correto, alterando a classe, estilo apenas no css
    // ClassList passa todas as classes do elemento, e métodos, como o add.
    paciente.classList.add("pacienteInvalido");
  }
  // Calculando o valor do IMC
  if (pesoValido && alturaValida) {
    const imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000) {
    return true;
  }
  else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 4) {
    return true;
  }
  else {
    return false;
  }
}

function calculaImc(peso, altura) {
    const imc = peso / (altura*altura);
    // ToFixed determina as decimais
    return imc.toFixed(2);
}

// Escutando eventos
// Com func nomeada
titulo.addEventListener("click", mostraMensagem);
// Com func anonima
titulo.addEventListener("click", function(){
  console.log("Clicou anonimo");
});
function mostraMensagem() {
  console.log("Clicou Nomeado");
}
