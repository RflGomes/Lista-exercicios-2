//Objetivo: Crie um array de objetos estoque, onde cada objeto tem
//produto, quantidade e minimo. Use forEach para atualizar a quantidade
//dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: 'Caderno', quantidade: 5, minimo: 10 },
    { produto: 'Lápis', quantidade: 8, minimo: 15 },
    { produto: 'Régua', quantidade: 12, minimo: 8 },
    { produto: 'Borracha', quantidade: 3, minimo: 7 }
  ];
   
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      
      item.quantidade *= 2;
    }
  });
    
  console.log(estoque);