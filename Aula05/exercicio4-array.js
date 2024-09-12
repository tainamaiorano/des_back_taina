// Cria um array vazio para a clínica
let clinica = [];

// Simula a chegada de três animais diferentes
clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");

// Exibe a lista de animais na clínica
console.log("Lista de animais na clínica:", clinica);

// Remove os animais da lista um por vez
clinica.shift(); // Remove "Cachorro"
clinica.shift(); // Remove "Gato"
clinica.shift(); // Remove "Coelho"

// Exibe o estado final da lista
console.log("Estado final da lista:", clinica);
