const alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"];

function fnExibirChamada() {
    console.log(`Primeiro aluno: ${alunos[0]}\nÚltimo aluno: ${alunos[alunos.length - 1]}`)
}

fnExibirChamada()

let pedido = ["Teclado Mecânico", "Mouse Gamer"];

function fnAdicionarProduto(lista, novoItem) {
  lista.push(novoItem);
  console.log(pedido);
}

fnAdicionarProduto(pedido, "Headset USB");

let pacientes = ["Marcos","Juliana","Roberto"];

function fnEncaixarPrioridade(fila, nomePaciente) {
    fila.unshift(nomePaciente)
    console.log(fila)
}

fnEncaixarPrioridade(pacientes, "Dona Clara (Idosa)")

let fila = [ "Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto" ]

function fnChamarProximoFila(fila) {
    console.log(`Próximo: ${fila[0]}`)
    fila.shift()
    console.log("Próximos a serem atendidos:")
    console.log(fila)
}

fnChamarProximoFila(fila)

let acoes = ["Escreveu titulo","Aplicou negrito","Inseriu tabela"];

function fnDesfazerAcao(lista) {
    console.log(`Atividade a ser removida: ${lista[lista.length - 1]}`)
    lista.pop();
    console.log("Ações restantes: ")
    console.log(acoes)
}

fnDesfazerAcao(acoes)

const itens = ["Camiseta","Calça","Tênis","Boné"];

function fnVerificarEstoque(lista) {
    console.log("Quantidade de itens no array: " + lista.length);
}

fnVerificarEstoque(itens);

const convidados = ["Lucas", "Mariana", "Thiago", "Beatriz"];

function fnEstaNaLista(lista, nome) {
  if (lista.includes(nome)) {
    console.log(`Está na lista: ${nome}`);
  } else {
    console.log(`Não está na lista: ${nome}`);
  }
}

fnEstaNaLista(convidados, "Mariana");
fnEstaNaLista(convidados, "Rafael");

const ordem = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"];

function fnConsultarCorredor(ordem, item) {
  if (ordem.includes(item)) {
    console.log("O item se encontra na posição: " + (ordem.indexOf(item) + 1));
  } else {
    console.log(`O item "${item}" não existe.`)
  }
}

fnConsultarCorredor(ordem, "Feijão")
fnConsultarCorredor(ordem, "Macarrão")

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

function fnCriarBoletim(nota1, nota2, nota3) {
  let notas = [nota1, nota2, nota3];
  let soma = 0

  notas.forEach((valor) => {
    soma+=valor
  })

  if(soma / 3 >= 6) {
    return console.log("APROVADO!!!")
  }

  console.log("REPROVADO!!!")

}

fnCriarBoletim(5,6,8)