const pool = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const senhaCryptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = await pool.query(
      "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *",
      [nome, email, senhaCryptografada]
    );

    return res.status(201).json(novoUsuario.rows[0]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (usuario.rowCount < 1)
      return res.status(404).json({ mensagem: "Email ou Senha Inválida" });

    const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha);

    if (!senhaValida)
      return res.status(400).json({ mensagem: "Email ou Senha Inválida" });

    const token = jwt.sign({ id: usuario.rows[0].id }, senhaJwt, {
      expiresIn: "8h",
    });

    const { senha: _, ...usuarioLogado } = usuario.rows[0];

    return res.json({ usuario: usuarioLogado, token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const obterPerfil = async (req, res) => {
  return res.json(req.usuario);
};

module.exports = {
  cadastrarUsuario,
  login,
  obterPerfil,
};
