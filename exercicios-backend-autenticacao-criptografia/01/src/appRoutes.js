const express = require("express");
const { cadastarUsuario, login } = require("../controllers/usuarios");
const verificarUsurarioLogado = require("../middlewares/auth");
const {
  cadastarPokemon,
  atualizarPokemon,
  listarPokemon,
  listarPokemonPorId,
  deletarPokemonPorId,
} = require("../controllers/pokemons");
const appRouter = express();

appRouter.post("/usuario", cadastarUsuario);
appRouter.post("/login", login);

appRouter.use(verificarUsurarioLogado);

appRouter.get("/pokemon", listarPokemon);
appRouter.post("/pokemon", cadastarPokemon);

appRouter.get("/pokemon/:id", listarPokemonPorId);
appRouter.put("/pokemon/:id", atualizarPokemon);
appRouter.delete("/pokemon/:id", deletarPokemonPorId);

module.exports = appRouter;
