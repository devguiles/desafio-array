let input = document.getElementById("input");
const divFila = document.getElementById("fila");
const divAtendimento = document.getElementById("chamar");
const emAtendimento = document.getElementById("atual");

let fila = [];

function fnEntrarFila() {
  fila.push(input.value);
  let p = document.createElement("p");
  p.innerText = input.value;
  divFila.append(p);

  input.value = "";
}

function fnChamarFila() {
  emAtendimento.innerText = fila[0];

  if (fila.length  <= 0) {
      alert("Não dá pra chamar ninguém pois não há na fila.");
} else {
      fila.shift();
  }

  if(emAtendimento.innerText = undefined) {
    emAtendimento.innerText = ""
  }
}
