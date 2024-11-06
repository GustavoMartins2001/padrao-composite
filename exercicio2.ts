interface FuncionarioInterface{
    getNome(): string;
    getSalario(): number;
    calcularSalarioTotal(): number;
}

export class Funcionario implements FuncionarioInterface{
    private nome: string;
    private salario: number;
  
    constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
    }

    getNome(): string {
        return this.nome;
      }
    
      getSalario(): number {
        return this.salario;
      }
    
      calcularSalarioTotal(): number {
        return this.salario;
      }
}

export class Departamento implements FuncionarioInterface{
    private nome: string;
    private funcionarios: FuncionarioInterface[] = [];
  
    constructor(nome: string) {
      this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }
    
    getSalario(): number {
        return this.calcularSalarioTotal();
    }

    adicionarFuncionario(funcionario: FuncionarioInterface): void {
        this.funcionarios.push(funcionario);
    }
    
    removerFuncionario(funcionario: FuncionarioInterface): void {
        const index = this.funcionarios.indexOf(funcionario);
        if (index !== -1) {
          this.funcionarios.splice(index, 1);
        }
    }
    
      calcularSalarioTotal(): number {
        return this.funcionarios.reduce((total, func) => total + func.calcularSalarioTotal(), 0);
    }
  }

 
    // Criando funcionários
    const funcionario1 = new Funcionario("Joao", 3000);
    const funcionario2 = new Funcionario("Andre", 3500);
    const funcionario3 = new Funcionario("Carlos", 4000);
  
    // Criando departamentos e adicionando funcionários a eles
    const departamentoFinanceiro = new Departamento("Financeiro");
    departamentoFinanceiro.adicionarFuncionario(funcionario1);
    departamentoFinanceiro.adicionarFuncionario(funcionario2);
  
    const departamentoRH = new Departamento("Recursos Humanos");
    departamentoRH.adicionarFuncionario(funcionario3);
  
    // Criando o departamento principal e adicionando subdepartamentos
    const empresa = new Departamento("Empresa XYZ");
    empresa.adicionarFuncionario(departamentoFinanceiro);
    empresa.adicionarFuncionario(departamentoRH);
  
    // Calculando o salário por departamento
    console.log("Salário departamento Financeiro:", departamentoFinanceiro.calcularSalarioTotal());
    console.log("Salário departamento RH:", departamentoRH.calcularSalarioTotal());
    console.log("Salário total da organização:", empresa.calcularSalarioTotal());
  
    // Adicionando outro funcionário diretamente ao departamento principal
    const funcionario4 = new Funcionario("Daniel", 4500);
    empresa.adicionarFuncionario(funcionario4);
  
    // Recalculando o salário total da organização após a adição de um novo funcionário
    console.log("\nSalário total da organização após adicionar Daniel:", empresa.calcularSalarioTotal());
  
  
  // Executa a função de teste
  // testarEstruturaOrganizacional();