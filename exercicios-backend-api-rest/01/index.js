const express = require('express')
const routes = require('./routes')
const userAuth = require('./intermediario')

const server = express()
const port = 3000

server.use(express.json())
//server.use(userAuth)
server.use(routes)

server.listen(port, () => console.log(`Server listening on port ${port}!`))