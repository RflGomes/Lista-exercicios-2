//Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
//array de objetos. Cada objeto dentro de itens deve representar um
//produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
//para calcular o valor total do carrinho.

const carrinho = {
    itens: [
      { nome: 'Cadeira', quantidade: 1, precoUnitario: 300 },
      { nome: 'Mesa', quantidade: 2, precoUnitario: 500 },
      { nome: 'Sofá', quantidade: 1, precoUnitario: 3000 },
      { nome: 'Cama', quantidade: 2, precoUnitario: 4000 }
    ]
  };
  
   let valorTotal = 0;
    
  carrinho.itens.forEach(item => {
    const valorItem = item.quantidade * item.precoUnitario;
    valorTotal += valorItem;
  });
   
  console.log(`Valor total do carrinho: R$${valorTotal.toFixed(2)}`);