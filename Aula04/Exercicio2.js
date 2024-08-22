class Pessoa {
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    exibetrabalho(nomeEmpresa, tempoTrabalho) {
        console.log(`Empresa: ${nomeEmpresa}, Tempo de Trabalho: ${tempoTrabalho} anos`);
    }
}

// Testando a classe Pessoa
const pessoa1 = new Pessoa("Maria", 35, "Engenheira", 7500);
pessoa1.exibetrabalho("TechCorp", 5);
