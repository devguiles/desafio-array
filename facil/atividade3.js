let pacientes = ["Marcos","Juliana","Roberto"];

function fnEncaixarPrioridade(fila, nomePaciente) {
    fila.unshift(nomePaciente)
    console.log(fila)
}

fnEncaixarPrioridade(pacientes, "Dona Clara (Idosa)")   