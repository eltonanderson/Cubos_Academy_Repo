const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let nomeDoJogador = '';
let index = 0;

app.get('/', (req, res) => {
    nomeDoJogador = jogadores[index];    
    res.send(`É a vez de ${nomeDoJogador} jogar!`);
    if (index === 4) {
        index = 0;
    } else {
        index += 1;
    }
})


app.listen(3000, () => {
    console.log('Servidor rodando da porta 3000');
})