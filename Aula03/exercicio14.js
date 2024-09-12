// Recebe três números e determina o maior entre eles
function encontrarMaiorNumero(num1, num2, num3) {
    let maior;

    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    return maior;
}

// Testa a função com três números e exibe o maior valor no console
let numero1 = 15;
let numero2 = 28;
let numero3 = 22;

let maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);
console.log("O maior número é:", maiorNumero);
