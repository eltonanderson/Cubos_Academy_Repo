const numeros = [54, 36, 14, 10, 54, 284];
let index = -1
let temDez = false
for (let i of numeros) {
    index++
    if (i === 10) {
        temDez = true
        break
    }
}
if (temDez) {
    console.log(index)
} else {
    console.log(-1)
}

