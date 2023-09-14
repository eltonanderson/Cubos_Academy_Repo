const express = require("express");
const {
  listarProdutos,
  listarPorId,
} = require("./controladores/controladorProdutos");
const calcularFrete = require("./controladores/controladorFretes");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Servidor Ativo");
});

route.get("/produtos", listarProdutos);
route.get("/produtos/:id", listarPorId);

route.get("/produtos/:id/frete/:cep", calcularFrete);

module.exports = route;
