//const disjuntores = [false, false, true, false, false, true, false, false];
const disjuntores = [
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
  ];
  
  // seu codigo aqui
let index = -1
for (let i of disjuntores) {
    index++
    if (i) {
        console.log(index)
    }
}