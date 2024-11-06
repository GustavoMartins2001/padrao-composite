"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departamento = exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.calcularSalarioTotal = function () {
        return this.salario;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
var Departamento = /** @class */ (function () {
    function Departamento(nome) {
        this.funcionarios = [];
        this.nome = nome;
    }
    Departamento.prototype.getNome = function () {
        return this.nome;
    };
    Departamento.prototype.getSalario = function () {
        return this.calcularSalarioTotal();
    };
    Departamento.prototype.adicionarFuncionario = function (funcionario) {
        this.funcionarios.push(funcionario);
    };
    Departamento.prototype.removerFuncionario = function (funcionario) {
        var index = this.funcionarios.indexOf(funcionario);
        if (index !== -1) {
            this.funcionarios.splice(index, 1);
        }
    };
    Departamento.prototype.calcularSalarioTotal = function () {
        return this.funcionarios.reduce(function (total, func) { return total + func.calcularSalarioTotal(); }, 0);
    };
    return Departamento;
}());
exports.Departamento = Departamento;
// Criando funcionários
var funcionario1 = new Funcionario("Joao", 3000);
var funcionario2 = new Funcionario("Andre", 3500);
var funcionario3 = new Funcionario("Carlos", 4000);
// Criando departamentos e adicionando funcionários a eles
var departamentoFinanceiro = new Departamento("Financeiro");
departamentoFinanceiro.adicionarFuncionario(funcionario1);
departamentoFinanceiro.adicionarFuncionario(funcionario2);
var departamentoRH = new Departamento("Recursos Humanos");
departamentoRH.adicionarFuncionario(funcionario3);
// Criando o departamento principal e adicionando subdepartamentos
var empresa = new Departamento("Empresa XYZ");
empresa.adicionarFuncionario(departamentoFinanceiro);
empresa.adicionarFuncionario(departamentoRH);
// Calculando o salário por departamento
console.log("Salário departamento Financeiro:", departamentoFinanceiro.calcularSalarioTotal());
console.log("Salário departamento RH:", departamentoRH.calcularSalarioTotal());
console.log("Salário total da organização:", empresa.calcularSalarioTotal());
// Adicionando outro funcionário diretamente ao departamento principal
var funcionario4 = new Funcionario("Daniel", 4500);
empresa.adicionarFuncionario(funcionario4);
// Recalculando o salário total da organização após a adição de um novo funcionário
console.log("\nSalário total da organização após adicionar Daniel:", empresa.calcularSalarioTotal());
// Executa a função de teste
// testarEstruturaOrganizacional();
