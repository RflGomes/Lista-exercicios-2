//Objetivo: Crie um array de objetos funcionarios, onde cada objeto
//contém informações como nome, cargo, e salario. Use for of para filtrar
//e exibir apenas os funcionários cujo salário seja maior que um valor
//específico.

const funcionarios = [
    { nome: 'Maria', cargo: 'estagiária', salario: 1800 },
    { nome: 'João', cargo: 'assistente', salario: 2500 },
    { nome: 'Luana', cargo: 'analista', salario: 5000 },
    { nome: 'Pedro', cargo: 'assistente', salario: 2500 }
  ]

  const valorReferencia = 2000
  for (const funcionario of funcionarios){
    if (funcionario.salario > valorReferencia){
        console.log(`Nome: ${funcionario.nome}, cargo: ${funcionario.cargo}, salário: ${funcionario.salario}`)
    }

  }
