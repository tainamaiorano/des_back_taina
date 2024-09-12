// Variáveis iniciais
let saldo = 1000;      // Saldo inicial da conta bancária
let deposito = 250;    // Valor a ser depositado
let saque = 150;       // Valor a ser sacado

// Realiza a operação de depósito
let operacaoDeposito = saldo + deposito;

// Realiza a operação de saque
let operacaoSaque = operacaoDeposito - saque;

// Exibe os resultados finais no console
console.log("Saldo inicial:", saldo);
console.log("Valor do depósito:", deposito);
console.log("Valor do saque:", saque);
console.log("Saldo após depósito:", operacaoDeposito);
console.log("Saldo final após saque:", operacaoSaque);
