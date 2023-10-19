const pool = require("../connection");

async function cadastrarLivro(req, res) {
  let { nome, genero, editora, data_publicacao } = req.body;
  let { id } = req.params;
  id = Number(id);
  if (!nome) return res.json({ mensagem: "o campo nome é obrigatório." });
  try {
    const insertQuery = `INSERT INTO livros 
        (nome, genero, editora, data_publicacao, autor_id)
        VALUES
        ($1, $2, $3, $4, $5)`;

    await pool.query(insertQuery, [nome, genero, editora, data_publicacao, id]);
    const resultQuery = await pool.query(
      "SELECT isbn, nome, genero, editora, data_publicacao AS date FROM livros"
    );
    return res.json(resultQuery.rows);
  } catch (error) {
    console.log(error.message);
    return res.json({ Mensagem: error.message });
  }
}

async function listarLivros(req, res) {
  try {
    const listarQuery = await pool.query(
      "SELECT livros.isbn, livros.nome AS nome_livro, livros.genero, livros.editora, livros.data_publicacao, livros.autor_id, autores.nome AS nome_autor, autores.idade FROM livros LEFT JOIN autores ON livros.autor_id = autores.id"
    );
    const listaDeLivros = [];

    for (let i of listarQuery.rows) {
      const autorDoLivro = {
        id: i.autor_id,
        nome: i.nome_autor,
        idade: i.idade,
      };
      const cadaLivro = {
        id: i.isbn,
        nome: i.nome,
        genero: i.genero,
        editora: i.editora,
        data_publicacao: i.data_publicacao,
        autor: autorDoLivro,
      };

      listaDeLivros.push(cadaLivro);
    }

    res.json(listaDeLivros);
  } catch (error) {
    console.log(error.message);
    return res.json({ Mensagem: error.message });
  }
}

module.exports = {
  cadastrarLivro,
  listarLivros,
};
