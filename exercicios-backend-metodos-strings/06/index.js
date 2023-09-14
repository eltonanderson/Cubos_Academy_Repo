const celular = 7199918888;

let primeiraParte = celular.toString().slice(-8, -4);
let ultimaParte = celular.toString().slice(-4, celular.length);
let prefixoDDD = null;

if(celular.toString().length > 9) {
    prefixoDDD = celular.toString().slice(0, 2);
}
if (prefixoDDD !== null) {
    console.log(`(${prefixoDDD}) 9 ${primeiraParte}-${ultimaParte}`);
} else {
    console.log(`9 ${primeiraParte}-${ultimaParte}`);
}