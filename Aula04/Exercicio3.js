// Define a classe Automovel
class Automovel {
    // Construtor que inicializa os atributos
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.tipoCombustivel = tipoCombustivel;
        this.quantidadeRodas = quantidadeRodas;
    }
}

// Define a classe Carro que herda de Automovel
class Carro extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);
        this.motorLigado = false;
        this.vidroAberto = false;
    }

    // Método para ligar o carro
    ligar() {
        this.motorLigado = true;
        console.log("O carro está ligado.");
    }

    // Método para desligar o carro
    desligar() {
        this.motorLigado = false;
        console.log("O carro está desligado.");
    }

    // Método para abrir o vidro
    abrirVidro() {
        this.vidroAberto = true;
        console.log("O vidro está aberto.");
    }

    // Método para descer o vidro
    descerVidro() {
        this.vidroAberto = false;
        console.log("O vidro está fechado.");
    }
}

// Define a classe Moto que herda de Automovel
class Moto extends Automovel {
    // A moto pode ter métodos e atributos específicos se necessário
}

// Define a classe Caminhao que herda de Automovel
class Caminhao extends Automovel {
    // O caminhão pode ter métodos e atributos específicos se necessário
}

// Testa as classes
let meuCarro = new Carro("Vermelho", "Fusca", "Gasolina", 4);

// Testa os métodos da classe Carro
console.log(`Modelo do carro: ${meuCarro.modelo}`);
meuCarro.ligar();           // Saída: O carro está ligado.
meuCarro.abrirVidro();      // Saída: O vidro está aberto.
meuCarro.descerVidro();     // Saída: O vidro está fechado.
meuCarro.desligar();        // Saída: O carro está desligado.
