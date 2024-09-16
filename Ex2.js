//Objetivo: Crie um objeto livro com propriedades titulo, autor,
//anoPublicacao e genero. Verifique se a propriedade editora existe no
//objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: 'A hora da Estrela',
    autor: 'Clarice Lispector',
    anoPublicacao: 1977,
    genero: 'Romance'
  }

  let possuiEditora = false;

  for (let propriedade in livro) {
    if (propriedade === 'editora') {
      possuiEditora = true;
      break
    }
  }

  if (!possuiEditora) {
    livro.editora = 'Editora Rocco'
  }

  console.log(livro)