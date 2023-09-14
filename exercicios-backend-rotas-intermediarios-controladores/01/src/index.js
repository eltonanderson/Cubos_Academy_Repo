const express = require('express');
const { operacaoSomar, operacaoSubtrair, operacaoMultiplicar, operacaoDividir } = require('./controladorOperacoes');
const app = express()
const port = 3000


app.get('/somar', operacaoSomar);
app.get('/subtrair', operacaoSubtrair);
app.get('/multiplicar', operacaoMultiplicar);
app.get('/dividir', operacaoDividir);


app.listen(port, () => console.log(`App listening on port ${port}!`))