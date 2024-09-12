// Define a classe Cliente
class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }

    // Método para realizar um Pix
    pix(valor) {
        if (valor <= 0) {
            console.log("O valor do Pix deve ser positivo.");
            return;
        }
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Pix realizado com sucesso! Valor: R$${valor}. Saldo atual: R$${this.saldo}.`);
        } else {
            console.log("Saldo insuficiente para realizar o Pix.");
        }
    }

    // Método para solicitar um Empréstimo
    emprestimo(valor) {
        if (valor <= 0) {
            console.log("O valor do empréstimo deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log(`Empréstimo aprovado! Valor: R$${valor}. Saldo atual: R$${this.saldo}.`);
    }

    // Método para realizar um Saque
    saque(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque realizado com sucesso! Valor: R$${valor}. Saldo atual: R$${this.saldo}.`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    // Método para exibir o Extrato
    extrato() {
        console.log(`Extrato do cliente ${this.nome}: Saldo atual: R$${this.saldo}.`);
    }
}

// Função principal para interagir com o usuário
function main() {
    let nome = prompt("Digite seu nome:");
    let profissao = prompt("Digite sua profissão:");
    let saldo = parseFloat(prompt("Digite seu saldo inicial:"));

    let cliente = new Cliente(nome, profissao, saldo);

    let continuar = true;
    while (continuar) {
        let opcao = prompt(
            "Escolha uma opção:\n1. Pix\n2. Empréstimo\n3. Saque\n4. Extrato\n5. Sair"
        );

        switch (opcao) {
            case '1':
                let valorPix = parseFloat(prompt("Digite o valor do Pix:"));
                cliente.pix(valorPix);
                break;
            case '2':
                let valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));
                cliente.emprestimo(valorEmprestimo);
                break;
            case '3':
                let valorSaque = parseFloat(prompt("Digite o valor do saque:"));
                cliente.saque(valorSaque);
                break;
            case '4':
                cliente.extrato();
                break;
            case '5':
                continuar = false;
                console.log("Saindo do programa.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

// Executa o programa principal
main();
