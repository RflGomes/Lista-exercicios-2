//Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
//preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
//os produtos e exibir o novo preço.

const produtos = [
    { nome: 'Monitor', preco: 1500, desconto: 0 },
    { nome: 'Headset', preco: 100, desconto: 0 },
    { nome: 'Teclado', preco: 240, desconto: 0 },
    { nome: 'Mouse', preco: 90, desconto: 0 }
]

produtos.forEach(produto => {
    const descontoDado = 0.10
    const novoValor = produto.preco * (1 - descontoDado)

    produto.preco = novoValor

    console.log(`Nome: ${produto.nome}, Novo valor: R$${novoValor.toFixed(2)} `)
    
});