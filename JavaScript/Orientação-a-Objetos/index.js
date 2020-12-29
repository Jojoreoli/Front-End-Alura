/*BYTEBANK*/

//Importando classes
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//Instanciando clientes com construtores
const cliente1 = new Cliente("João", 12345678910);
const cliente2 = new Cliente("Ana", 12345678911);

//Instanciando Contas Correntes com construtores
const contaCorrenteCliente1 = new ContaCorrente(1001, cliente1);
const contaCorrenteCliente2 = new ContaCorrente(1001, cliente2);

//Instanciando conta corrente E cliente juntos (Funciona mas não é uma boa prática)
// const contaCorrenteCliente3 = new ContaCorrente();
// contaCorrenteCliente3.cliente = new Cliente();
// contaCorrenteCliente3.cliente.nome = "Mia";
// contaCorrenteCliente3.cliente.cpf = 12312312312;
// contaCorrenteCliente3.agencia = 1001;

//Alterando o saldo das contas
contaCorrenteCliente1.depositar(1000);
contaCorrenteCliente1.sacar(50);
contaCorrenteCliente1.transferir(200, contaCorrenteCliente2)

//Impressões
console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);
console.log(ContaCorrente.numeroDeContas);
