// Define a classe Livros
class Livros {
    constructor(nome, quantidade, preco, autor, edicao) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.autor = autor;
        this.edicao = edicao;
    }

    // Método para emprestar um livro
    emprestar() {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log(`Livro emprestado com sucesso! ${this.quantidade} exemplar(es) restante(s) de "${this.nome}".`);
        } else {
            console.log(`Não há mais exemplares disponíveis de "${this.nome}".`);
        }
    }

    // Método para devolver um livro
    devolver() {
        this.quantidade++;
        console.log(`Livro devolvido com sucesso! ${this.quantidade} exemplar(es) disponível(eis) de "${this.nome}".`);
    }
}

// Testa a classe Livros
let livro1 = new Livros("O Senhor dos Anéis", 5, 45.00, "J.R.R. Tolkien", 3);

// Exibe informações iniciais
console.log(`Nome: ${livro1.nome}`);
console.log(`Quantidade: ${livro1.quantidade}`);
console.log(`Preço: R$${livro1.preco}`);
console.log(`Autor: ${livro1.autor}`);
console.log(`Edição: ${livro1.edicao}`);

// Empresta e devolve livros
livro1.emprestar();   // Saída: Livro emprestado com sucesso! 4 exemplar(es) restante(s) de "O Senhor dos Anéis".
livro1.emprestar();   // Saída: Livro emprestado com sucesso! 3 exemplar(es) restante(s) de "O Senhor dos Anéis".
livro1.devolver();
