const express = require("express");
const { procurarendereco } = require("./controladorEndereco");
const route = express.Router();

route.get("/enderecos/:cep", procurarendereco);

module.exports = route;
