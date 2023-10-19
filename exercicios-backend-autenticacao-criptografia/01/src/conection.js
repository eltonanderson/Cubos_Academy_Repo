const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "657405",
  database: "catalogo_pokemons",
});

module.exports = pool;
