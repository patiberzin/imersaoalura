var nome = "Patricia"

var notaPrimeiroBimestre = 9
var notaSegundoBimestre = 7
var notaTerceiroBimestre = 8
var notaQuartoBimestre = 6

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

console.log("Média do aluno é: " + notaFinal)

if (notaFinal > 6) {
  console.log ("Aprovado, passou de ano, " + nome);
} else {
  console.log ("Reprovado")
}

var notaFixada = notaFinal.toFixed(1)
console.log(notaFixada)

//comentário
//Vimos: variáveis, strings, console.log, toFixed, operações matemáticas, concatenação, 