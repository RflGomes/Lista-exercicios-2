//Objetivo: Crie um array de objetos alunos, cada um com propriedades
//nome, nota1, e nota2. Use for of para calcular a média das notas de cada
//aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    { nome: 'Maria', nota1: 10.0, nota2: 9.5 },
    { nome: 'João', nota1: 7.0, nota2: 7.5 },
    { nome: 'Luana', nota1: 8.0, nota2: 10.0 },
    { nome: 'Pedro', nota1: 9.0, nota2: 6.0 }
  ]

  for (const aluno of alunos){
    const media = (aluno.nota1 + aluno.nota2) / 2
    console.log (`Nome: ${aluno.nome}, Média: ${(aluno.nota1 + aluno.nota2) / 2}`)
  }