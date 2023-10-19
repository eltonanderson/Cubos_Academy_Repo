CREATE DATABASE biblioteca;

CREATE TABLE autores (
  id serial PRIMARY KEY,
  nome text NOT NULL,
  idade integer
);

INSERT INTO autores 
(nome, idade)
VALUES
('Guido Cerqueira', 32);
SELECT * FROM autores;

CREATE TABLE livros (
  isbn serial PRIMARY KEY,
  nome text NOT NULL,
  genero text,
  editora text,
  data_publicacao date NOT NULL,
  autor_id integer REFERENCES autores(id)
);

