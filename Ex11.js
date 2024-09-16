//Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
//cliente, produto, e quantidade. Use forEach para criar um objeto que
//agrupa a quantidade total de produtos por cliente.

const objetosPedidos = [
    {cliente: 'João', produto: 'caneta', quantidade: 5},
    {cliente: 'Clarice', produto: 'caderno', quantidade: 3},
    {cliente: 'Leticia', produto: 'régua', quantidade: 2},
    {cliente: 'Priscila', produto: 'borracha', quantidade: 4}
] 

const quantidadePorCliente = {}

objetosPedidos.forEach(objetoPedido =>{
    if (quantidadePorCliente[objetoPedido.cliente]) {
    quantidadePorCliente[objetoPedido.cliente] += objetoPedido.quantidade;
} else {
    quantidadePorCliente[objetoPedido.cliente] = objetoPedido.quantidade;
}
})


console.log(quantidadePorCliente)