const botao = document.querySelector("#buscar-paciente");

// Requisicao assincrona JS ou AJAX
botao.addEventListener("click", function(dado){
  console.log("Buscando");
  // Cria um requisitor HTTP
  const xhr = new XMLHttpRequest();
  // Diz qual o endereço e qual o método acessor
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  // Load = ao carregar o conteúdo do http.
  xhr.addEventListener("load", function(){
    const erroAjax = document.querySelector("#erroAjax");
    // Verificando se ocorreu um erro. 200 tudo ok
    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      // responseText é todo o conteúdo retornado da requisição
      const resposta = xhr.responseText;
      // Parseia de JSON para JS
      const pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });
    }
    else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }
  });
  // Envia a requisição HTTP para o endereço passado.
  xhr.send();
})
