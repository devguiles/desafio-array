const compras = [29.9, 54.0, 80.0];

function somarTotalCompras(lista) {
  let soma = 0;

  lista.forEach((valor) => (soma += valor));

  console.log("Valor total: " + soma.toFixed(2));
}

somarTotalCompras(compras);

const notas = [6.5, 5.0, 7.5, 6.0];

function calcularMedia(lista) {
  let media = 0;

  lista.forEach((nota) => (media += nota));

  media = media / lista.length;

  if (media >= 6) {
    return console.log("APROVADO");
  }

  return console.log("REPROVADO");
}

calcularMedia(notas);

const faixasEtarias = [14, 18, 25, 16, 32, 17, 19];

function maioresDeIdade(lista) {
  let adultos = lista.filter((idade) => idade >= 18);

  console.log("Apenas os adultos: " + adultos);
}

maioresDeIdade(faixasEtarias);

let cadastros = ["joao.silva", "maria.souza", "pedro.lima"];

function cadastrarUsuario(lista, login) {
  if (lista.includes(login)) {
    return console.log(
      `O login ${login} não pode ser cadastrado pois já existe.`,
    );
  } else {
    lista.push(login);
    console.log(`O login ${login} foi cadastrado com sucesso.`);
    return console.log(lista);
  }
}

cadastrarUsuario(cadastros, "gui.albuquerque");

let precos = [100, 200, 50, 80];

function desconto(arr) {
  let arrDescontado = arr.map((preco) => preco * 0.15);

  return console.log(arrDescontado);
}

desconto(precos);

let numeros = [12, 7, 5, 20, 33, 8, 11, 4];

function qtdParesImpares(arr) {
  let qtdPares = 0;
  let qtdImpares = 0;

  arr.forEach((numero) => {
    if (numero % 2 == 0) {
      qtdPares++;
    } else {
      qtdImpares++;
    }
  });

  console.log(
    `Quantidade de pares: ${qtdPares}\nQuantidade de Ímpares: ${qtdImpares} `,
  );
}

qtdParesImpares(numeros);

let temperaturas = [22, 29, 18, 31, 24, 19];

function menorEMaiorTemperatura(arr) {
  let menorTemperatura = arr[0];
  let maiorTemperatura = arr[0];

  arr.forEach((temperatura) => {
    if (temperatura < menorTemperatura) {
      menorTemperatura = temperatura;
    }

    if (temperatura > maiorTemperatura) {
      maiorTemperatura = temperatura;
    }
  });

  console.log(`Menor temperatura: ${menorTemperatura}.`);
  console.log(`Maior temperatura: ${maiorTemperatura}.`);
}

menorEMaiorTemperatura(temperaturas);

let pedido = ["Hambúrguer", "Batata Frita", "Refrigerante", "Sobremesa"];

function cancelarItem(arr, item) {
  let pedidoAtualizado = arr.filter((e) => e != "Batata Frita");
  console.log(pedidoAtualizado);
}

cancelarItem(pedido, "Batata Frita");

let names = ["Amanda", "Carlos", "Arthur", "Bruna", "Alice", "Diego"];

function filtrarPorInicial(arr, inicial) {
  let nomesFiltrados = arr.filter((e) => e[0] == inicial);
  console.log("Nomes filtrados: " + nomesFiltrados);
}

filtrarPorInicial(names, "A");


let estoque = ["Notebook com 4", "Webcam com 0", "Mousepad com 12", "Cabo HDMI com 0"];

function estoqueDisponivel(arr) {
    console.log("Ainda tem estoque disponível:");
    console.log(arr.filter((e) => !e.includes(0)))
}

estoqueDisponivel(estoque)