CREATE DATABASE aula_autenticacao_criptografia;

CREATE TABLE carros (
    id serial PRIMARY KEY,
    modelo text NOT NULL,
    marca text NOT NULL,
    ano integer NOT NULL,
    cor text NOT NULL,
    descricao text
);

CREATE TABLE usuarios (
  id serial PRIMARY KEY,
  nome text NOT NULL,
  email text NOT NULL UNIQUE,
  senha text NOT NULL
);







