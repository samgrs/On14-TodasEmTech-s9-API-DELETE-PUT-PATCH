//controller vai ter a logica

//chamando o json de filmes
const filmesJson = require("../models/filmes.json")


//função getAll retorna todos os filmes
const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}


//função getById retorna um filme de um id especifico
const getById = (request, response)=>{
    let idRequest = request.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)
}

const createMovie = (request, response)=>{
    let body = request.body

    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: body.Title,
        Plot: body.Plot
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        [
            {
                "mensagem":"filme cadastrado com sucesso",
                novoFilme
            }
        ]
    )

}

const updateTitle = (request, response)=>{
    const idRequest = request.params.id 
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "filme atualizadocom sucesso",
                filmeFiltrado
            }
        ]
    )
}



//exportando todas os funções do controller para ser usada no filmesRoutes.js
module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle
}