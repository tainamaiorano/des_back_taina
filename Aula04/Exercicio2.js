class Pessoa {
    constructor(nome, idade, profissao, salario) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
      this.salario = salario;
    }
  
    exibirTrabalho(nomeEmpresa, tempoTrabalho) {
      console.log(`Nome da empresa: ${nomeEmpresa}`);
      console.log(`Tempo de trabalho: ${tempoTrabalho} anos`);
    }
  }
  
  // Testando a classe
  const pessoa1 = new Pessoa('João', 30, 'Desenvolvedor', 5000);
  
  console.log(`Nome: ${pessoa1.nome}`);
  console.log(`Idade: ${pessoa1.idade}`);
  console.log(`Profissão: ${pessoa1.profissao}`);
  console.log(`Salário: R$ ${pessoa1.salario}`);
  
  // Chamando o método 
  pessoa1.exibirTrabalho('SENAI', 5);
  
