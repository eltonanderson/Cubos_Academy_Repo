const pool = require("../conexao");
const { criarToken, cobrar } = require("../stripe");

const venda = async (req, res) => {
  const { cliente_id, produto_id, quantidade, card } = req.body;

  try {
    const cliente = await pool.query("SELECT * FROM clientes WHERE id = $1", [
      cliente_id,
    ]);

    if (cliente.rowCount < 1)
      return res.status(404).json({ mensagem: "Cliente não existe" });

    const produto = await pool.query("SELECT * FROM produtos WHERE id = $1", [
      produto_id,
    ]);

    if (produto.rowCount < 1)
      return res.status(404).json({ mensagem: "Produto não existe" });

    if (quantidade < 1)
      return res.status(400).json({ mensagem: "Quantidade minima é 1" });

    const valorVenda = produto.rows[0].valor * quantidade;

    //const tokenCartao = await criarToken({ card });
    //const cobranca = await cobrar(valorVenda, tokenCartao);
    const cobranca = await cobrar(valorVenda, "tok_visa");

    const vendaRealizada = await pool.query(
      `INSERT INTO vendas
    (cliente_id, produto_id, quantidade, transacao_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *`,
      [cliente_id, produto_id, quantidade, cobranca.id]
    );

    return res.status(200).json(vendaRealizada.rows[0]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Erro interno do servidor");
  }
};

module.exports = {
  venda,
};
