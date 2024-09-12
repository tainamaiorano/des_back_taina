// Define a classe Produtos
class Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoComunicacao = tipoComunicacao;
        this.consumoEnergia = consumoEnergia;
        this.ligado = false; // Inicialmente o produto está desligado
    }

    // Método para ligar o produto
    ligar() {
        this.ligado = true;
        console.log(`${this.nome} está ligado.`);
    }

    // Método para desligar o produto
    desligar() {
        this.ligado = false;
        console.log(`${this.nome} está desligado.`);
    }

    // Método para ajustar a temperatura (aplicável apenas para produtos que têm temperatura)
    ajustarTemperatura(setpoint) {
        if (this.ligado) {
            console.log(`${this.nome} está ajustado para ${setpoint}°.`);
        } else {
            console.log("O produto precisa estar ligado para ajustar a temperatura.");
        }
    }
}

// Define a classe Fritadeira que herda de Produtos
class Fritadeira extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    // Método específico para ajustar a temperatura da fritadeira
    ajustarTemperatura(setpoint) {
        super.ajustarTemperatura(setpoint); // Chama o método ajustarTemperatura da classe base
    }
}

// Define a classe Televisao que herda de Produtos
class Televisao extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    // Método específico para ajustar a temperatura da televisão (não aplicável, mas implementado para compatibilidade)
    ajustarTemperatura(setpoint) {
        console.log("Ajuste de temperatura não aplicável para uma televisão.");
    }
}

// Define a classe ArCondicionado que herda de Produtos
class ArCondicionado extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    // Método específico para ajustar a temperatura do ar-condicionado
    ajustarTemperatura(setpoint) {
        super.ajustarTemperatura(setpoint); // Chama o método ajustarTemperatura da classe base
    }
}

// Testa as classes
let minhaFritadeira = new Fritadeira("Fritadeira Elétrica", 10, 150, "Digital", 1200);
let minhaTelevisao = new Televisao("Televisão LED", 5, 2500, "HDMI", 150);
let meuArCondicionado = new ArCondicionado("Ar Condicionado Split", 3, 3500, "Wi-Fi", 2000);

// Liga os produtos e ajusta a temperatura onde aplicável
minhaFritadeira.ligar();                      // Saída: Fritadeira Elétrica está ligada.
minhaFritadeira.ajustarTemperatura(180);      // Saída: Fritadeira Elétrica está ajustado para 180°.

minhaTelevisao.ligar();                      // Saída: Televisão LED está ligado.
minhaTelevisao.ajustarTemperatura(22);        // Saída: Ajuste de temperatura não aplicável para uma televisão.

meuArCondicionado.ligar();                   // Saída: Ar Condicionado Split está ligado.
meuArCondicionado.ajustarTemperatura(22);     // Saída: Ar Condicionado Split está ajustado para 22°.
