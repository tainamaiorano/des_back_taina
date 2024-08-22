class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.motorLigado = false; // Inicialmente o motor está desligado
    }
  
    ligarMotor() {
      this.motorLigado = true;
      console.log("O motor está agora ligado.");
    }
  
    desligarMotor() {
      this.motorLigado = false;
      console.log("O motor está agora desligado.");
    }
  
    statusMotor() {
      return this.motorLigado ? "O motor está ligado." : "O motor está desligado.";
    }
  }
  
  // Testando a classe
  const meuCarro = new Carro('Toyota', 'Corolla', 2020);
  
  console.log(meuCarro.statusMotor()); //  O motor está desligado.
  
  meuCarro.ligarMotor(); // O motor está agora ligado.
  console.log(meuCarro.statusMotor()); // O motor está ligado.
  
  meuCarro.desligarMotor(); // O motor está agora desligado.
  console.log(meuCarro.statusMotor()); // O motor está desligado.