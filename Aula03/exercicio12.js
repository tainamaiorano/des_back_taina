// Define a função que recebe a idade como argumento e verifica se é maior de idade
function verificarMaiorIdade(idade) {
    return idade >= 18 ? "A pessoa é maior de idade." : "A pessoa é menor de idade.";
}

// Chama a função com uma idade e exibe o resultado no console
let idadePessoa = 20;  // Você pode mudar esse valor para testar diferentes idades
let resultado = verificarMaiorIdade(idadePessoa);
console.log(resultado);
