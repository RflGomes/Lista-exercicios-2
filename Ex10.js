//Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
//quantidade e valor. Use forEach para calcular o valor total de vendas de
//todos os produtos.

const vendas = [
    { produto: 'Monitor', quantidade: 15, valor: 1200 },
    { produto: 'Headset', quantidade: 34, valor: 90 },
    { produto: 'Teclado', quantidade: 7, valor: 180 },
    { produto: 'Mouse', quantidade: 23, valor: 130 }
]

let valorTotal = 0

vendas.forEach(venda => {
    const valorVenda = venda.quantidade * venda.valor
    valorTotal += valorVenda
})

console.log(`Valor total das vendas: R$${valorTotal}`)