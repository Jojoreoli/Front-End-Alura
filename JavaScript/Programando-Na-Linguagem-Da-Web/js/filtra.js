const campoFiltro = document.querySelector("#filtrarTabela");

// Escutando inputs
campoFiltro.addEventListener("input", function(filtro){
  const pacientes = document.querySelectorAll(".paciente");
  // Verificando se algo esta digitado
  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];
      const tdNome = paciente.querySelector(".info-nome");
      const nome = tdNome.textContent;
      // Expressao regular, permite a filtragem letra a letra "insensitive"
      const expressao = new RegExp(this.value, "i");
      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      }
      else {
        paciente.classList.remove("invisivel");
      }
    }
  }
  else {
    // Reseta a tabela quando o campo esta vazio
    for (var i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
})
