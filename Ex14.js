//Objetivo: Crie um objeto empresa com uma propriedade departamentos,
//que é um array de objetos. Cada departamento tem um nome e uma lista
//de funcionarios. Use for in e for of para iterar sobre os departamentos
//e seus funcionários, exibindo o nome de cada funcionário junto com o
//departamento ao qual pertence.

const empresa = {
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: [
          { nome: 'Ana', cargo: 'Analista de RH' },
          { nome: 'Carlos', cargo: 'Gerente de RH' }
        ]
      },
      {
        nome: 'TI',
        funcionarios: [
          { nome: 'Beatriz', cargo: 'Desenvolvedora' },
          { nome: 'Daniel', cargo: 'Administrador de Redes' }
        ]
      },
      {
        nome: 'Administrativo',
        funcionarios: [
          { nome: 'Eduardo', cargo: 'Assistente Administrativo' },
          { nome: 'Fernanda', cargo: 'Analista Administrativo' }
        ]
      }
    ]
  };
  
  
  for (const departamento of empresa.departamentos) {   
    for (const funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario.nome}, Departamento: ${departamento.nome}`);
    }
  }