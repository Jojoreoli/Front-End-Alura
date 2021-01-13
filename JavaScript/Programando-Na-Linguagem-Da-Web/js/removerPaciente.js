const tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
  // target = em quem eu clico. ParentNode pega o pai do clique
  event.target.parentNode.classList.add("fadeOut");
  // Faz a linha aguardar o tempo especificado em ms
  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500);
});
