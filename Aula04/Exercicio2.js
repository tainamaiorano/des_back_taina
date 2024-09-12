// Define a classe Pessoa
class Pessoa {
  // Construtor que inicializa os atributos
  constructor(nome, idade, profissao, salario) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
      this.salario = salario;
  }

  // Método para exibir informações sobre o trabalho
  exibirTrabalho(nomeEmpresa, tempoTrabalho) {
      console.log(`Nome da empresa: ${nomeEmpresa}`);
      console.log(`Tempo de trabalho: ${tempoTrabalho} anos`);
  }
}

// Testa a classe Pessoa
let pessoa1 = new Pessoa("Carlos", 30, "Engenheiro", 5000);

// Exibe informações sobre o trabalho
pessoa1.exibirTrabalho("TechSolutions", 5);
