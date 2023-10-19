CREATE DATABASE catalogo_pokemons;

CREATE TABLE usuarios (
  id serial PRIMARY KEY,
  nome text NOT NULL,
  email text NOT NULL UNIQUE,
  senha text NOT NULL
);

CREATE TABLE pokemons (
  id serial PRIMARY KEY,
  usuario_id integer NOT NULL,
  nome text NOT NULL,
  habilidades text NOT NULL,
  imagem text,
  apelido text
);
