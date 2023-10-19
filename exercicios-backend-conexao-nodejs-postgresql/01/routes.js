const express = require("express");
const {
  listarAutores,
  addAutor,
  buscarAutorPorId,
} = require("./controllers/autores");
const { cadastrarLivro, listarLivros } = require("./controllers/livros");
const appRouter = express.Router();

appRouter.get("/autor", listarAutores);
appRouter.get("/livro", listarLivros);
appRouter.get("/:id", buscarAutorPorId);

appRouter.post("/autor", addAutor);
appRouter.post("/autor/:id/livro", cadastrarLivro);

module.exports = appRouter;
