let input = document.getElementById("input");
let arr = [];

function fnSalvarNome() {
   arr.push(input.value)
   
   let p = document.createElement("p");
   let div = document.createElement("div")

   document.body.append(div)
   div.append(p)

   p.innerText = input.value
   input.value = ""
   
   for(let i = 0; i < arr.length; i++) {
      divNomes.append("p")
   }
}