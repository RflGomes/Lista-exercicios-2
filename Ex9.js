//Objetivo: Crie um array de objetos clientes, cada um com propriedades
//nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
//de 30 anos.

const clientes = [
    { nome: 'Marcelo', idade: 47, cidade: 'São Paulo' },
    { nome: 'Teresa', idade: 29, cidade: 'Minas Gerais' },
    { nome: 'Paulo', idade: 19, cidade: 'Porto Alegre' },
    { nome: 'Roberta', idade: 38, cidade: 'Manaus' }
]

let clienteAcima30 = 0

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        clienteAcima30++
    }    
});

console.log(`A quantidade de cliente acima de 30 é ${clienteAcima30}`)