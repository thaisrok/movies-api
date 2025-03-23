const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Define a pasta pública
app.use(express.static('public'))

app.get('/api/movies', (req, res) => {
    const movies = [{
        _id: "123456",
        name: "Hair",
        year: 2021,
        directores: ["Gabi", "João", "Thaís"],
        cast: ["Gabi", "João", "Thais", "Daniel"],
        country: "Brasil",
        synopsis: "Loren Ipsum",
        mpaa: "A 14"
    },
    {
        _id: "123456",
        name: "Hair",
        year: 2021,
        directores: ["Gabi", "João", "Thaís"],
        cast: ["Gabi", "João", "Thais", "Daniel"],
        country: "Brasil",
        synopsis: "Loren Ipsum",
        mpaa: "A 14"
    }]
    res.json(movies)
})

app.get('/api/movies/:name', (req, res) => {
    const movie = {
        _id: "123456",
        name: "Hair",
        year: 2021,
        directores: ["Gabi", "João", "Thaís"],
        cast: ["Gabi", "João", "Thais", "Daniel"],
        country: "Brasil",
        synopsis: "Loren Ipsum",
        mpaa: "A 14"
    }
    res.json(movie)
    /* 
    - nome do filme
    - ano do filme
    - classificação etária
    - país de produção
    - lista de diretores
    - lista com principais atores
    - sinopse
    - identificador do filme
    */
})

app.post('/api/movies', (req, res) => {
    res.sendStatus(201)
})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})

//rota para cadastrar filmes
//rota para recuperar filmes cadastrados
//rota para recuperar filmes pelo nome