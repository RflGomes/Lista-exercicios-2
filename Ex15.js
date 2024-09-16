//Objetivo: Crie um array de objetos transacoes, onde cada transação tem
//tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
//somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: 'entrada', valor: 1500 },
    { tipo: 'saída', valor: 400 },
    { tipo: 'entrada', valor: 150 },
    { tipo: 'saída', valor: 30 },
    { tipo: 'entrada', valor: 300 }
  ];
 
  let saldoFinal = 0;  
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
      saldoFinal -= transacao.valor;
    }
  });  
  
  console.log(`Saldo final: R$${saldoFinal.toFixed(2)}`);