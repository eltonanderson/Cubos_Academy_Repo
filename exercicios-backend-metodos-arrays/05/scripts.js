const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente (arrayDePacientes, paciente) {
    let index = arrayDePacientes.indexOf(paciente);
    arrayDePacientes.splice(index, 1);
    arrayDePacientes.push(paciente);

    console.log(arrayDePacientes);
}

function atenderPaciente (arrayDePacientes, paciente) {
    arrayDePacientes.shift();

    console.log(arrayDePacientes);
}

function cancelarAtendimento (arrayDePacientes, paciente) {
    let index = arrayDePacientes.indexOf(paciente);
    arrayDePacientes.splice(index, 1);

    console.log(arrayDePacientes);
}


agendarPaciente(pacientes, 'Maria')
atenderPaciente(pacientes, 'Pedro')
cancelarAtendimento(pacientes, 'Ana')