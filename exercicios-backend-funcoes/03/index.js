const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente} 
        Total de itens: ${this.calcularTotalDeItens()} 
        Total a pagar: R$ ${this.calcularTotalAPagar()}`)        
    },
    addProduto: function (produto) {
        let produtoJaAdd = false
        for (i=0; i < carrinho.produtos.length; i++) {
            if (carrinho.produtos[i].nome === produto.nome) {
                carrinho.produtos[i].qtd += produto.qtd
                produtoJaAdd = true
                break
            } 
        }
        if (!produtoJaAdd) {
            carrinho.produtos.push(produto)
        }        
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`)

        for(i = 0; i < this.produtos.length; i++) {
            console.log(`Item ${this.produtos[i].id} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${((this.produtos[i].precoUnit * this.produtos[i].qtd)/100).toFixed(2)}`)
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total: R$ ${((this.calcularTotalAPagar())/100).toFixed(2)}`)
        console.log(`Desconto: R$ ${((this.calcularDesconto())/100).toFixed(2)}`)
        console.log(`Total a pagar: R$ ${((this.calcularTotalAPagar() - this.calcularDesconto())/100).toFixed(2)}`)
        
    },
    calcularTotalDeItens: function () {
        let totalDeItens = 0
        for (i = 0; i < this.produtos.length; i++) {
            totalDeItens += this.produtos[i].qtd
        } return totalDeItens
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0        
        for (i = 0; i < this.produtos.length; i++) {
            totalAPagar += (this.produtos[i].precoUnit * this.produtos[i].qtd)
        } return totalAPagar
    },
    calcularDesconto: function () {
        let menorValor = this.produtos[0].precoUnit
        let valorSemDesconto = 0
        let dezPorcento = 0

        for (i = 0; i < this.produtos.length; i++) {
            valorSemDesconto += this.produtos[i].precoUnit * this.produtos[i].qtd
            if(this.produtos[i].precoUnit < menorValor) {
                menorValor = this.produtos[i].precoUnit
            }
        } 
        dezPorcento = valorSemDesconto * 10 / 100

        if (this.calcularTotalDeItens() > 4 && valorSemDesconto > 10000) {
            return menorValor < dezPorcento ? dezPorcento: menorValor
        } else if (this.calcularTotalDeItens() > 4) {
            return menorValor
        } else if (valorSemDesconto > 10000) {
            return dezPorcento
        }
    }
}

function imprimirResumoDoCarrinho(carrinho) {
    let totalDeItens = 0
    let totalAPagar = 0
    for (i = 0; i < carrinho.produtos.length; i++) {
        totalDeItens += carrinho.produtos[i].qtd
        totalAPagar += carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd
    }
    console.log(`Cliente: ${carrinho.nomeDoCliente} 
    Total de itens: ${totalDeItens} 
    Total a pagar: R$ ${(totalAPagar/100).toFixed(2)}`)
}

function addProdutoAoCarrinho(carrinho, produto) {
    let produtoJaAdd = false
    for (i=0; i < carrinho.produtos.length; i++) {
        if (carrinho.produtos[i].nome === produto.nome) {
            carrinho.produtos[i].qtd += produto.qtd
            produtoJaAdd = true
            break
        } 
    }
    if (!produtoJaAdd) {
        carrinho.produtos.push(produto)
    }
}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

/*
addProdutoAoCarrinho(carrinho, novaBermuda);
console.log(carrinho.produtos)
carrinho.imprimirResumo();

addProdutoAoCarrinho(carrinho, novoTenis);
console.log(carrinho.produtos)
carrinho.imprimirResumo();
*/

carrinho.addProduto(novaBermuda);
//console.log(carrinho.produtos)
//carrinho.imprimirResumo();

carrinho.addProduto(novoTenis);
//console.log(carrinho.produtos)
//carrinho.imprimirResumo();
//console.log(carrinho.calcularDesconto())

carrinho.imprimirDetalhes()