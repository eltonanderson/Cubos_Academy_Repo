const pool = require("../connection");

async function listarAutores(req, res) {
  try {
    const query = "SELECT * FROM autores";
    const resultado = await pool.query(query);
    return res.json(resultado);
  } catch (error) {
    console.log(error.message);
    return res.json({ Mensagem: error.message });
  }
}

async function addAutor(req, res) {
  let { nome, idade } = req.body;
  idade = Number(idade);
  if (!nome) return res.json({ mensagem: "o campo nome é obrigatório." });

  try {
    const insertQuery = `INSERT INTO autores 
    (nome, idade)
    VALUES
    ($1, $2)`;

    await pool.query(insertQuery, [nome, idade]);

    return res.json(await pool.query("SELECT * FROM autores"));
  } catch (error) {
    console.log(error.message);
    return res.json({ Mensagem: error.message });
  }
}

async function buscarAutorPorId(req, res) {
  let { id } = req.params;
  id = Number(id);

  try {
    const buscaIdQuery = "SELECT id, nome, idade FROM autores WHERE id = $1;";
    const resultQuery = await pool.query(buscaIdQuery, [id]);

    if (resultQuery.rows.length === 0)
      return res.json({ Mensagem: "Autor não encontrado" });

    const leftJoinQuery = await pool.query(
      "SELECT livros.isbn, livros.nome, livros.genero, livros.editora, livros.data_publicacao FROM autores LEFT JOIN livros ON autores.id = livros.autor_id"
    );

    if (leftJoinQuery.rows.length === 0)
      return res.json({ Mensagem: "livro não encontrado" });

    const resultadoDaBusca = {
      id: resultQuery.rows[0].id,
      nome: resultQuery.rows[0].nome,
      idade: resultQuery.rows[0].idade,
      livros: leftJoinQuery.rows,
    };

    return res.json(resultadoDaBusca);
  } catch (error) {
    console.log(error.message);
    return res.json({ Mensagem: error.message });
  }
}

module.exports = {
  listarAutores,
  addAutor,
  buscarAutorPorId,
};
