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