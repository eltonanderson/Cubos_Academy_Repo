const produtos = require("../bancodedados/produtos");

const { getStateFromZipcode } = require("utils-playground");

const calcularFrete = async (req, res) => {
  const id = Number(req.params.id);
  const cep = req.params.cep;

  const produto = produtos.find((elemento) => {
    return elemento.id === id;
  });

  const estado = await getStateFromZipcode(cep);

  const resultado = {
    produto,
    estado,
    frete: valorDoFrete(produto.valor, estado),
  };

  return res.send(resultado);
};

const valorDoFrete = (valorDoProduto, estado) => {
  if (estado === "SP" || estado === "RJ") {
    return (valorDoProduto * 15) / 100;
  } else if (
    estado === "BA" ||
    estado === "SE" ||
    estado === "AL" ||
    estado === "PE" ||
    estado === "PB"
  ) {
    return (valorDoProduto * 10) / 100;
  } else {
    return (valorDoProduto * 12) / 100;
  }
};

module.exports = calcularFrete;
