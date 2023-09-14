const produtos = require("../bancodedados/produtos");

const listarProdutos = (req, res) => {
  res.send(produtos);
};

const listarPorId = (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find((elemento) => {
    return elemento.id === id;
  });

  if (!produto)
    return res.status(404).json({ mensagem: "Produto não encontrado" });

  return res.json(produto);
};

module.exports = {
  listarProdutos,
  listarPorId,
};
