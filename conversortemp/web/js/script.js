const btn = document.querySelector(".btn");
btn.addEventListener("click", Converter);

function Converter(e) {
  e.preventDefault();
  var grausTemperatura = document.getElementById("temperatura_entrada");
  var temperatura_entrada = grausTemperatura.value;
  var valorTemperaturaCelsius = parseFloat(temperatura_entrada);

  var temperaturaFahrenheit = valorTemperaturaCelsius * 1.8 + 32;
  console.log(temperaturaFahrenheit);

  var temperaturaValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O valor convertido para Fahrenheit é: " + " ºF " + temperaturaFahrenheit;
  temperaturaValorConvertido.innerHTML = valorConvertido;
}