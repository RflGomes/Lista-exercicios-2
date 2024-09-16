//Objetivo: Dado um objeto produto com várias propriedades, crie uma
//função que retorna um novo objeto contendo apenas as propriedades cujo
//valor seja maior que um valor específico. Use for in para filtrar as
//propriedades.


const produto = {
    nome: 'Cadeira',
    preco: 120,
    estoque: 30,
    largura: 45
  };

  const valor = 31;
  
  const podutoFiltrado = {};
  for (const key in produto) {
    if (produto[key] > valor) {
        podutoFiltrado[key] = produto[key];
    }
  }
  
  console.log(podutoFiltrado)
