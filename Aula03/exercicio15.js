function calculaPotencia(base, expoente) {
    return Math.pow(base, expoente);
}

// Testa a função com alguns valores e exibe o resultado no console
let base = 2;
let expoente = 3;

let resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado à potência ${expoente} é: ${resultado}`);
