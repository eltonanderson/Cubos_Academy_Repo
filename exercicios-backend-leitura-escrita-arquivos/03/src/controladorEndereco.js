const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises");

const procurarendereco = async (req, res) => {
  const cep = req.params.cep;
  const inicioCep = cep.slice(0, 5);
  const finalCep = cep.slice(-3);
  const cepVerificador = inicioCep + "-" + finalCep;
  console.log(cepVerificador);

  const enderecosSalvos = await fs.readFile("./src/enderecos.json");
  const parseEnderecosSalvos = JSON.parse(enderecosSalvos);

  let endereco = parseEnderecosSalvos.find((elemento) => {
    return elemento.cep === cepVerificador;
  });

  if (!endereco) {
    endereco = await buscarEndereco(cep);

    parseEnderecosSalvos.push(endereco);

    await fs.writeFile(
      "./src/enderecos.json",
      JSON.stringify(parseEnderecosSalvos)
    );

    console.log(endereco);
    return res.json("endereco do API Util-playground");
  } else {
    console.log(endereco);
    return res.json("endereco do banco de dados");
  }
};

module.exports = {
  procurarendereco,
};
