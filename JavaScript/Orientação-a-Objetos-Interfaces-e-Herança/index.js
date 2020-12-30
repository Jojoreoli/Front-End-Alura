/*BYTEBANK*/

//Importando classes
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

//Instanciando funcionários
const diretor = new Diretor("Tobias", 10000, 123123123100);
diretor.cadastrarSenha("123");
const gerente = new Gerente("Aline", 7000,32132132100);
gerente.cadastrarSenha("456")
const logadoDiretor = SistemaAutenticacao.login(diretor, "123")
const logadoGerente = SistemaAutenticacao.login(gerente, "456")

//Instanciando clientes com construtores
const cliente1 = new Cliente("João", 12345678910, "789");
const logadoCliente = SistemaAutenticacao.login(cliente1, "789")

//Instanciando Contas com construtores
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001, 0);
const contaPoupanca = new ContaPoupanca (cliente1, 1001, 1500);

//Zona de Operações
contaCorrenteCliente1.depositar(1000);
contaCorrenteCliente1.sacar(100);

//Zona de Impressões
console.log(contaCorrenteCliente1);
console.log(contaPoupanca);
console.log(logadoDiretor);
console.log(logadoGerente);
console.log(logadoCliente);
