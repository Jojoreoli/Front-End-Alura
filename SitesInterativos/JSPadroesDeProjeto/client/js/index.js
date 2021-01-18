// criando o array com os campos do form
// const campos = [
//   document.querySelector("#data"),
//   document.querySelector("#quantidade"),
//   document.querySelector("#valor")
// ];
// // pegando a tabela
// const tbody = document.querySelector("table tbody");
// // Configurando o listener
// document.querySelector(".form").addEventListener("submit", function(event){
//   // Prevenindo a atualizacao automatica da pagina
//   event.preventDefault();
//   const tr = document.createElement("tr");
//   // Criando um td com o valor do campo e anexando ao tr
//   campos.forEach(function(campo){
//     const td = document.createElement("td");
//     td.textContent = campo.value;
//     tr.appendChild(td);
//   });
//   // Calculando o volume
//   const tdVolume = document.createElement("td");
//   tdVolume.textContent = campos[1].value * campos[2].value;
//   // Anexando o volume e a tr
//   tr.appendChild(tdVolume);
//   tbody.appendChild(tr);
//   // Resetando os valores default do form
//   campos[0].value = "";
//   campos[1].value = 1;
//   campos[2].value = 0;
//   campos[0].focus();
// });
