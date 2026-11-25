let acoes = ["Escreveu titulo","Aplicou negrito","Inseriu tabela"];

function fnDesfazerAcao(lista) {
    console.log(`Atividade a ser removida: ${lista[lista.length - 1]}`)
    lista.pop();
    console.log("Ações restantes: ")
    console.log(acoes)
}

fnDesfazerAcao(acoes)