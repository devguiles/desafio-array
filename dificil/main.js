let input1 = document.getElementById("input1");
let arr = [];

function fnSalvarNome() {
  arr.push(input1.value);

  let p = document.createElement("p");
  let div = document.createElement("div");

  document.body.append(div);
  div.append(p);

  p.innerText = inpu1.value;
  input1.value = "";

  for (let i = 0; i < arr.length; i++) {
    divNomes.append("p");
  }
}

let tarefas = [];

let input2 = document.getElementById("input");

function fnAtualizarListaTarefas() {
  tarefas.push(input2.value);

  let p = document.createElement("p");
  p.innerText = input2.value;
  document.body.append(p);
  inpu2.value = "";
}

let input3 = document.getElementById("input");
const divFila = document.getElementById("fila");
const divAtendimento = document.getElementById("chamar");
const emAtendimento = document.getElementById("atual");

let fila = [];

function fnEntrarFila() {
  fila.push(input3.value);
  let p = document.createElement("p");
  p.innerText = input3.value;
  divFila.append(p);

  input3.value = "";
}

function fnChamarFila() {
  if (fila.length == 0) {
    emAtendimento.innerText = "";
    return;
  }

  emAtendimento.innerText = fila[0];
  fila.shift();
}

const input4 = document.getElementById("input");
const adicionar = document.getElementById("adicionar");
const remover = document.getElementById("remover");
const container1 = document.getElementById("container");

let acoes = [];
function fnRegistrarAcao() {
  acoes.push(input4.value);

  let p = document.createElement("p");
  p.innerText = input4.value;
  container1.append(p);
  input4.value = "";
}

function fnDesfazerUltima() {
  acoes.pop();
  container1.lastElementChild.remove();
}

let numeros = [];
const input5 = document.getElementById("input");
const somaTotal = document.getElementById("total");
const container2 = document.getElementById("container");

function fnAdicionarValor() {
  numeros.push(input.value);
  let p = document.createElement("p");
  p.innerText = input5.value;
  container2.append(p);
  input5.value = "";
}

function fnCalcularSomaArray() {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += parseInt(numeros[i]);
  }

  console.log(soma);

  somaTotal.innerText = `Soma total: ${soma}`;
}

const cursos = ["HTML", "JS", "CSS", "Java", "Python"];
const input6 = document.getElementById("input");
const container3 = document.getElementById("container");

function fnVerificarNoArray() {
  if (cursos.includes(input6.value)) {
    const p = document.createElement("p");
    p.innerText = `O curso ${input6.value} existe.`;
    container3.append(p);
    input6.value = "";
  } else {
    const p = document.createElement("p");
    p.innerText = `O curso ${input6.value} não existe.`;
    container3.append(p);
    input6.value = "";
  }
}

const cidades = ["Americana", "Campinas", "Piracicaba"];
const input7 = document.getElementById("input");
const container4 = document.getElementById("container");
const p1 = document.createElement("p");

function fnBuscarIndiceCidade() {
  if (cidades.includes(input7.value)) {
    cidades.forEach((e, i) => {
      if (input7.value == e) {
        p1.innerText = `Cidade ${e} encontrada na posição ${i}`;
      }
    });
  } else {
    p1.innerText = `A cidade ${input7.value} não existe no array.`;
  }
  container4.append(p1);
}

const arrNotas = [8, 5, 7, 3, 4, 2];
const input8 = document.getElementById("input");
const p2 = document.createElement("p");

function fnFiltrarArray() {
  const filtrarNotas = arrNotas.filter((e) => e >= input8.value);
  input8.value = "";
  p2.innerText = filtrarNotas;
  document.body.append(p2);
}

let frutas = ["Maçã", "Maracujá", "Abacaxi", "Laranja"];
const input9 = document.getElementById("input");
const p3 = document.getElementById("array");
p3.innerText = frutas

function fnRemoverFrutaArray() {
  if (frutas.includes(input9.value)) {
    frutas = frutas.filter((e) => e != input9.value);
    p3.innerText = frutas;
    console.log(frutas);
  }
}

let participantes = [];
const p4 = document.getElementById("array")
const input10 = document.getElementById("input")
const sorteado = document.getElementById("sorteado")

function fnAdicionarParticipante() {
    participantes.push(input10.value)
    input10.value = ""
    sorteado.innerText = participantes
}

function fnSortearParticipante() {
    sorteado.innerText = Math.random(0, participantes.length)
}

