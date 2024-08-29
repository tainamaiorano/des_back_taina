// Crie um array vazio chamado meuArray e adicione 3 números inteiros 
//de sua escolha utilizando o método push(). Imprima no console os 
// presentes no array para verificar se os números foram adicionados. 
//Em seguida, substitua o primeiro elemento do array (índice 0) pelo 
//dobro do seu valor atual. Imprima no console o array atualizado para 
//verificar a mudança.


// Criando um array vazio
let meuArray = [];

// Adicionando três números inteiros ao array usando o método push()
meuArray.push(5);
meuArray.push(10);
meuArray.push(15);

// Imprimindo o array para verificar os itens adicionados
console.log("Array após adicionar os elementos:", meuArray);

// Substituindo o primeiro elemento pelo dobro do seu valor atual
meuArray[0] = meuArray[0] * 2;

// Imprimindo o array atualizado para verificar a mudança
console.log("Array após substituir o primeiro elemento:", meuArray);
