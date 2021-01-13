// Fazendo o botao do form
const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
  // Previne o comportamento padrao do elemento
  event.preventDefault();
  const form = document.querySelector("#formAdiciona");
  const paciente = pegaPacienteForm(form);

  // Validando o paciente
  const erro = validaPaciente(paciente);
  if (erro.length > 0) {
    mensagemErro(erro);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  // Limpando o form apos o fim
  form.reset();
  let mensagemDeErro = document.querySelector("#mensagemErro");
  mensagemDeErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
  const pacienteTr = montaTr(paciente);
  // Anexando a TR a tabela
  const tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

// Criando as mensagens de erro
function mensagemErro(erros) {
  let ul = document.querySelector("#mensagemErro");
  // innerHTML permite alterar o html de um elemento
  ul.innerHTML = "";
  erros.forEach(function(erro){
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function pegaPacienteForm(form){
  const paciente = {
    // Atribuindo o valor passado no  form para atributos
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente) {
  // Cria a TR
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // Anexando todos os TDs ao TR
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  const td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {

  const erros = [];

  if (!validaAltura(paciente.altura)) erros.push("Altura invalida");
  if (!validaPeso(paciente.peso)) erros.push("Peso invalido");
  if (paciente.nome.length == 0) erros.push("Nome vazio");
  if (paciente.gordura.length == 0) erros.push("Gordura vazia");
  if (paciente.peso.length == 0) erros.push("Peso vazio");
  if (paciente.altura.length == 0) erros.push("Altura vazia");
  return erros;
}
