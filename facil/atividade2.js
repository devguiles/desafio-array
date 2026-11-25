let pedido = ["Teclado Mecânico", "Mouse Gamer"];

function fnAdicionarProduto(lista, novoItem) {
  lista.push(novoItem);
  console.log(pedido);
}

fnAdicionarProduto(pedido, "Headset USB");
