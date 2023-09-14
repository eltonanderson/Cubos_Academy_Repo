const express = require('express')
const { listarImoveis, buscaPorId } = require('./controladorImoveis')
const rotas = require('./rotas')


const app = express()
const port = 8000


app.use(rotas)


app.listen(port, () => console.log(`App listening on port ${port}!`))