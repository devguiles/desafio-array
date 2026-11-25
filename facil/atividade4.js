let fila = [ "Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto" ]

function fnChamarProximoFila(fila) {
    console.log(`Próximo: ${fila[0]}`)
    fila.shift()
    console.log("Próximos a serem atendidos:")
    console.log(fila)
}

fnChamarProximoFila(fila)