// verifica se uma string é um palindromo
function ehPalindromo(str) {
    // Remove espaços e converte a string para minúsculas para uma verificação mais robusta
    let limpaStr = str.replace(/\s+/g, '').toLowerCase();

    // Inverte a string
    let strInvertida = limpaStr.split('').reverse().join('');

    // verifica se a string original é igual à string invertida
    return limpaStr === strInvertida;
}

// Testa a funçao com diferentes exemplos e imprime o resultado no console
let palavra1 = "arara";
let palavra2 = "javaScript";

console.log(`"${palavra1}" é palíndromo?`, ehPalindromo(palavra1)); // Deve retornar true
console.log(`"${palavra2}" é palíndromo?`, ehPalindromo(palavra2)); // Deve retornar false
