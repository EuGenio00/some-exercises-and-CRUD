/* Criação de uma página WEB, onde será possível realizar o cadastro de um produto de uma loja, alterar o valor desse produto, deletar o produto da prateleira e apresentar a lista dos produtos para os clientes na página.

Tudo isso deverá ser realizado em uma única página.

Itens obrigatórios:

- Criação de um array de objetos para armazenar os produtos. Deverá ser armazenados dentro do LocalStorage com a chave "produtosLoja". (3,0)
- Criação da página HTML para apresentar / alterar / cadastrar / deletar os produtos. (2,0)
- Função para listar os produtos. (1,0)
- Função para alterar o valor de um produto, deverá buscar cada produto pelo seu nome. (2,0)
- Função para deletar um produto. (1,0)
- Função para cadastrar um produto. (1,0) */

// Cria as variáveis e receba suas propriedades
let objetoProdutos = {}
let vetorProdutos = []
let nomeAlterar, posicaoProduto, novoValor
let excluiProdutos

// Chama a função cadastro de produtos
function cadastroProdutos() {

    // Receba o nome e seu valor e armazena na variável
    objetoProdutos.nome = document.getElementById("nomeProduto").value
    objetoProdutos.valor = document.getElementById("valorProduto").value

    // Busca o vetor no localstorage
    vetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'))

    if (vetorProdutos == null) {// Se vetor for igual a null
        vetorProdutos = []
        vetorProdutos.push(objetoProdutos)// Atribua os produtos no vetor
        localStorage.setItem('produtosLoja', JSON.stringify(vetorProdutos))

    } else {
        vetorProdutos.push(objetoProdutos)
        localStorage.setItem('produtosLoja', JSON.stringify(vetorProdutos))
    }

}

// Chama a função altera produtos
function alteraProdutos() {

    // Busca o vetor no localstorage
    vetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'))

    // Receba o nome a alterar e armazena na variável 
    nomeAlterar = document.getElementById("AlteraNome").value

    // Faça o loop na posição de cada vetor
    for (i = 0; i < vetorProdutos.length; i++) {

        if (nomeAlterar == vetorProdutos[i].nome) {

            posicaoProduto = i

        }
    }

    //Atribui novo valor para o produto
    novoValor = document.getElementById("valorNovo").value

    //Receba um valor novo ao produto
    vetorProdutos[posicaoProduto].valor = novoValor
    localStorage.setItem('produtosLoja', JSON.stringify(vetorProdutos))

}

// Chama a função para listar produtos
function listaProdutos() {

    let listadeProdutos = ''

    vetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'))

    // Faça o loop na posição de cada vetor
    for (i = 0; i < vetorProdutos.length; i++) {

        listadeProdutos = listadeProdutos + Object.values(vetorProdutos[i]).join(', ') + '<br>'
    }
    //Apresenta a lista de produtos da preteleira
    document.getElementById("Lista").innerHTML = listadeProdutos
}

// Chama a função exclui produtos
function deletaProdutos() {

    vetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'))

    // Recebe nome a excluir e armazena na variável
    excluiProdutos = document.getElementById("deletaProduto").value

    // Faça o loop na posição de cada vetor
    for (i = 0; i < vetorProdutos.length; i++) {

        if (excluiProdutos == vetorProdutos[i].nome) {

            posicaoProduto = i

            vetorProdutos.splice(posicaoProduto, 1)
        }
    }

    //Exclui o produto da preteleira
    localStorage.setItem('produtosLoja', JSON.stringify(vetorProdutos))

}