const pool = require("../src/conection");

async function cadastarPokemon(req, res) {
  const { nome, apelido, habilidades, imagem } = req.body;

  try {
    const novoUsuario = await pool.query(
      `INSERT INTO pokemons 
      (usuario_id, nome, apelido, habilidades, imagem) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [req.usuario.id, nome, apelido, habilidades, imagem]
    );

    return res.status(201).json(novoUsuario.rows[0]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function atualizarPokemon(req, res) {
  const { id } = req.params;
  const { apelido } = req.body;

  try {
    const pokemon = await pool.query(
      `UPDATE pokemons
      SET apelido = $1
      WHERE id = $2 RETURNING *`,
      [apelido, id]
    );

    if (pokemon.rowCount < 1)
      return res.status(404).json({ mensagem: "Pokemon não encontrado" });

    return res.status(201).json(pokemon.rows[0]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function listarPokemon(req, res) {
  try {
    const listar = await pool.query(`SELECT * FROM pokemons`);

    return res.json(listar.rows);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function listarPokemonPorId(req, res) {
  const { id } = req.params;
  try {
    const listar = await pool.query(
      `SELECT * FROM pokemons 
    WHERE id = $1`,
      [id]
    );

    return res.json(listar.rows);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function deletarPokemonPorId(req, res) {
  const { id } = req.params;
  try {
    const listar = await pool.query(
      `DELETE FROM pokemons 
    WHERE id = $1`,
      [id]
    );

    return res.json(listar.rows);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

module.exports = {
  cadastarPokemon,
  atualizarPokemon,
  listarPokemon,
  listarPokemonPorId,
  deletarPokemonPorId,
};
