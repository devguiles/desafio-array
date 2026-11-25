let precosLanches = [15.00, 25.00,40.00];


function fnAtualizarPreco(lista, indice, novoValor) {
    if(indice > lista.length - 1) {
        console.log("Esse indice não existe.")
        console.log(lista)
    } else {
        lista[indice] = novoValor
        console.log("Valores atualizados:")
        console.log(lista)
    }

}

fnAtualizarPreco(precosLanches, 3, 60)