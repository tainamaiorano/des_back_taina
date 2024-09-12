// Variáveis booleanas para simular as condições
let usuarioLogado = true;          // Verifica se o usuário está logado
let usuarioAdmin = true;           // Verifica se o usuário tem permissão de administrador

// Usa o operador AND para verificar se condições são verdadeiras
let acessoPermitido = usuarioLogado && usuarioAdmin;

// Exibe o resultado no console
if (acessoPermitido) {
    console.log("Acesso permitido: O usuário está logado e tem permissão de administrador.");
} else {
    console.log("Acesso negado: O usuário não está logado ou não tem permissão de administrador.");
}
