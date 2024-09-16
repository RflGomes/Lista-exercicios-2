//Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
//uma pessoa com nome, idade, e cidade. Use for of para exibir as
//informações de cada pessoa no console.

const pessoas = [
  { nome: 'Maria', idade: 28, cidade: 'São Paulo' },
  { nome: 'João', idade: 35, cidade: 'Rio de Janeiro' },
  { nome: 'Luana', idade: 18, cidade: 'Belo Horizonte' },
  { nome: 'Pedro', idade: 20, cidade: 'Salvador' }
]


for (const pessoa of pessoas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}