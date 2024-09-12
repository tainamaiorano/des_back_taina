// Define a funçao que recebe o nome como argumento e retorna uma saudação personalizada
function saudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

// Chama a funçao com um nome e exibe a saudaçao no console
let nomePessoa = "Maria";
let mensagem = saudacao(nomePessoa);
console.log(mensagem);
