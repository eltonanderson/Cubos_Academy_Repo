// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }


//Add produtos Jose
jose.carrinho.quantidade = 0
jose.carrinho.push(tv)
jose.carrinho.quantidade++
jose.carrinho.push(caboUsb)
jose.carrinho.quantidade++
jose.carrinho.push(caboUsb)
jose.carrinho.quantidade++

//Add produtos Carlos
carlos.carrinho.quantidade = 0
carlos.carrinho.push(notebook)
carlos.carrinho.quantidade++
carlos.carrinho.push(notebook)
carlos.carrinho.quantidade++

//Add produtos Patricia
patricia.carrinho.quantidade = 0
patricia.carrinho.push(teclado)
patricia.carrinho.quantidade++
patricia.carrinho.push(caboUsb)
patricia.carrinho.quantidade++
patricia.carrinho.push(caboUsb)
patricia.carrinho.quantidade++
patricia.carrinho.push(carregador)
patricia.carrinho.quantidade++
patricia.carrinho.push(mouse)
patricia.carrinho.quantidade++
patricia.carrinho.push(monitor)
patricia.carrinho.quantidade++

//Add produtos Renato
renato.carrinho.quantidade = 0
renato.carrinho.push(webcam)
renato.carrinho.quantidade++
renato.carrinho.push(webcam)
renato.carrinho.quantidade++
renato.carrinho.push(webcam)
renato.carrinho.quantidade++
renato.carrinho.push(webcam)
renato.carrinho.quantidade++
renato.carrinho.push(webcam)
renato.carrinho.quantidade++

//Add produtos roberto
roberto.carrinho.quantidade = 0
roberto.carrinho.push(webcam)
roberto.carrinho.quantidade++
roberto.carrinho.push(caboUsb)
roberto.carrinho.quantidade++
roberto.carrinho.push(caboUsb)
roberto.carrinho.quantidade++
roberto.carrinho.push(monitor)
roberto.carrinho.quantidade++

console.log(jose.carrinho)
console.log(carlos.carrinho)
console.log(patricia.carrinho)
console.log(renato.carrinho)
console.log(roberto.carrinho)