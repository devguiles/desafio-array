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