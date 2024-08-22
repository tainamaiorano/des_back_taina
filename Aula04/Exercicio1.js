class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

const carro1 = new Carro('Ford', 'Mustang', 2024);
const carro2 = new Carro('Chevrolet', 'Camaro', 2023);

carro1.mostrarDetalhes(); // Saída: Marca: Ford, Modelo: Mustang, Ano: 2024
carro2.mostrarDetalhes(); // Saída: Marca: Chevrolet, Modelo: Camaro, Ano: 2023