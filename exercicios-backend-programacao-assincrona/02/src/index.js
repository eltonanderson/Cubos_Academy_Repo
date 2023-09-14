const express = require("express");
const { listarPokemons, detalharPokemon } = require("utils-playground");

const server = express();
const port = 8000;

server.get("/pokemon", async (req, res) => {
  res.send(await listarPokemons());
});

server.get("/pokemon/:id", async (req, res) => {
  const id = req.params.id;
  const pokemon = await detalharPokemon(id);

  const resultado = {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    base_experience: pokemon.base_experience,
    forms: pokemon.forms,
    abilities: pokemon.abilities,
    species: pokemon.species,
  };

  return res.send(resultado);
});

server.listen(port, () => console.log(`Server listening on port ${port}!`));
