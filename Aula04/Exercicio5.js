// Define a classe Maquinas
class Maquinas {
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
        this.nome = nome;
        this.quantidadeEixos = quantidadeEixos;
        this.rotacoesPorMinuto = rotacoesPorMinuto;
        this.consumoEnergia = consumoEnergia;
        this.ligada = false; // Inicialmente a máquina está desligada
    }

    // Método para ligar a máquina
    ligar() {
        this.ligada = true;
        console.log(`${this.nome} está ligada.`);
    }

    // Método para desligar a máquina
    desligar() {
        this.ligada = false;
        console.log(`${this.nome} está desligada.`);
    }

    // Método para ajustar a velocidade de rotação
    ajustarRotacao(novaRotacao) {
        if (this.ligada) {
            this.rotacoesPorMinuto = novaRotacao;
            console.log(`${this.nome} agora está a ${this.rotacoesPorMinuto} rotações por minuto.`);
        } else {
            console.log("A máquina precisa estar ligada para ajustar a rotação.");
        }
    }
}

// Define a classe Furadeira que herda de Maquinas
class Furadeira extends Maquinas {
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
        super(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia);
    }

    // Método para ligar a furadeira
    ligar() {
        super.ligar(); // Chama o método ligar da classe base
        console.log(`${this.nome} (Furadeira) está agora pronta para uso.`);
    }

    // Método para desligar a furadeira
    desligar() {
        super.desligar(); // Chama o método desligar da classe base
    }

    // Método para ajustar a rotação
    ajustarRotacao(novaRotacao) {
        super.ajustarRotacao(novaRotacao); // Chama o método ajustarRotacao da classe base
    }
}

// Testa as classes
let minhaFuradeira = new Furadeira("Furadeira Industrial", 2, 1500, 2000);

// Liga a furadeira e ajusta a rotação
minhaFuradeira.ligar();                  // Saída: Furadeira Industrial está ligada. Furadeira Industrial (Furadeira) está agora pronta para uso.
minhaFuradeira.ajustarRotacao(1800);     // Saída: Furadeira Industrial agora está a 1800 rotações por minuto.

// Desliga a furadeira
minhaFuradeira.desligar();               // Saída: Furadeira Industrial está desligada.
