/*BYTEBANK*/

//Ser autenticável significa ter ao método autenticar
export class SistemaAutenticacao {
  static login(usuario, senha){
    if (SistemaAutenticacao.autenticavel(usuario)){
      return usuario.autenticar(senha);
    }
    return false;
  }
  static autenticavel(usuario){
    //Duck Typing, Tudo que interessa é se existe o método autenticar. 
    return "autenticar" in usuario && usuario.autenticar instanceof Function;
  }
}
