let input = document.getElementById("input")
let arr = [];

function fnSalvarNome() {
   arr.push(input.value)
   input.value = ""
   console.log(arr)
}