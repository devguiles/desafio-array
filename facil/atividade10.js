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