const numeroCartao = '1111222233334444';

const primeirosNumeros = numeroCartao.slice(0, 4);
const ultimosNumeros = numeroCartao.slice(-4, numeroCartao.length)

console.log(`${primeirosNumeros}********${ultimosNumeros}`);