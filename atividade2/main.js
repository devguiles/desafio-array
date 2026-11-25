let tarefas=[];

let input = document.getElementById("input");

function fnAtualizarListaTarefas() {
    tarefas.push(input.value);
    
    let p = document.createElement("p");
    p.innerText = input.value;
    document.body.append(p);
    input.value = "";
}