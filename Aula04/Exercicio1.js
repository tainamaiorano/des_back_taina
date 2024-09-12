// Define a classe Carro
class Carro {
  // Construtor que inicializa os atributos
  constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.motor_ligado = false; // O motor começa desligado
  }

  // Método para ligar o motor
  ligar_motor() {
      this.motor_ligado = true;
      console.log("O motor está ligado.");
  }

  // Método para desligar o motor
  desligar_motor() {
      this.motor_ligado = false;
      console.log("O motor está desligado.");
  }

  // Método para verificar o status do motor
  status_motor() {
      return this.motor_ligado ? "O motor está ligado." : "O motor está desligado.";
  }
}

// Testa a classe Carro
let meuCarro = new Carro("Toyota", "Corolla", 2022);

// Exibe o status inicial do motor
console.log(meuCarro.status_motor());  // Saída: O motor está desligado.

// Liga o motor e exibe o status
meuCarro.ligar_motor();               // Saída: O motor está ligado.
console.log(meuCarro.status_motor());  // Saída: O motor está ligado.

// Desliga o motor e exibe o status
meuCarro.desligar_motor();            // Saída: O motor está desligado.
console.log(meuCarro.status_motor());  // Saída: O motor está desligado.
