var numeroSecreto = parseInt(Math.random() * 11);
var chances = [];

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  chances.push(chute);

  if (chances.length > 3) {
    alert("Game Over! Suas chances acabaram!");
  } else if (chute == numeroSecreto) {
    console.log("acertou");
    elementoResultado.innerHTML = "Parabéns, hoje é seu dia de sorte!";
  } else if (chute > 10 || chute < 0) {
    alert("Você deve digitar um número de 0 a 10");
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Errou, o número secreto é menor";
  } else {
    console.log("errou");
    elementoResultado.innerHTML = `Errou, o número secreto é maior`;
  }
}