const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaDePacientes (arrayPacientes, operacao, nome) {
    if(operacao === 'atender') {
        console.log('Atender')
        arrayPacientes.shift()

        console.log(arrayPacientes)

    } else if (operacao === 'agendar') {
        console.log('Agendar')
        let index = arrayPacientes.indexOf(nome)
        arrayPacientes.splice(index, 1)
        arrayPacientes.push(nome)

        console.log(arrayPacientes)
    }
}

for (let i of pacientes) {
    let aleatorio = Math.random()
    if (aleatorio > 0.5) {
        filaDePacientes(pacientes, 'atender', i)
    } else {
        filaDePacientes(pacientes, 'agendar', i)
    }
}