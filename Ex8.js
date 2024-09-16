//Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
//diretor, e anoLancamento. Use forEach para criar um novo array
//contendo apenas os títulos dos filmes.

const filmes = [
    {titulo: 'Titanic', diretor: 'James Cameron', anoLancamento: 1997},
    {titulo: 'Ben-Hur', diretor: 'William Wyler', anoLancamento: 1960},
    {titulo: 'Central do Brasil', diretor: 'Walter Moreira Salles Jr', anoLancamento: 1998},
    {titulo: 'Quem Quer Ser um Milionário', diretor: 'Danny Boyle', anoLancamento: 2008}
]

const titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo)
})

console.log(titulos)