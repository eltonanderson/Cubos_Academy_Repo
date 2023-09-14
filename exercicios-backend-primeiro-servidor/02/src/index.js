const express = require('express');
const app = express();

let minutos = 0;
let segundos = 0;

let iniciar = false;
let pausar = false;
let continuar = false;
let zerar = false;

let intervalId = null;

function contagem () {
    intervalId = setInterval(contagemSegundos, 1000);
}

function contagemSegundos() {
   if (!pausar) { 
    if (segundos >= 60) {
        segundos = 0;
        contagemMinutos();
    } else {
        segundos += 1;
    }
}
}

function contagemMinutos() {
    if (!pausar) {
    if (minutos >= 60) {
        minutos = 0;
    } else {
        minutos += 1;
    }
}
}

//página principal
app.get('/', (req, res) => {        
    
    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);
    
})

//Iniciar
app.get('/iniciar', (req, res) => {     
    
    iniciar = true;
    pausar = false;
    continuar = false;
    zerar = false;
    minutos = 0;
    segundos = 0;
    contagem();
    res.send('Cronômetro iniciado!');
})

//Pausar
app.get('/pausar', (req, res) => {     
    
    iniciar = false;
    pausar = true;
    continuar = false;
    zerar = false;
    res.send('Cronômetro pausado!');
})

//continuar
app.get('/continuar', (req, res) => {     
    
    iniciar = false;
    pausar = false;
    continuar = true;
    zerar = false;
    contagem();
    res.send('Cronômetro continuando!');
})

//Zerar
app.get('/zerar', (req, res) => {     
    iniciar = false;
    pausar = true;
    continuar = false;
    zerar = true;
    segundos = 0;
    minutos = 0;
    res.send('Cronômetro zerado!'); 
    clearInterval(intervalId)   
})


app.listen(8000, () => {
    console.log('Servidor express rodando na porta 8000')
})