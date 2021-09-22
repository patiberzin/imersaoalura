const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("teste");

  var tituloFilmePesquisado = document.getElementById("entradaFilme").value;

  //começa aqui

  var listaNomes = [
    "Transformers",
    "Homem de Ferro",
    "Amelie",
    "10 things I hate about you"
  ];

  var cadaNome = tituloFilmePesquisado;

  if (listaNomes.includes(cadaNome)) {
    alert("Esse filme já existe em nossa lista");
  } else {
    alert("Ajude-nos a melhorar...");
  }
});

//termina aqui

var listaFilmes = [
  {
    nome: "Transformers",
    imagem: "https://br.web.img3.acsta.net/pictures/14/06/20/23/27/478475.jpg"
  },
  {
    nome: "Homem de Ferro",
    imagem:
      "https://br.web.img3.acsta.net/medias/nmedia/18/91/79/19/20163665.jpg"
  },
  {
    nome: "Amelie",
    imagem:
      "https://cdn.culturagenial.com/imagens/o-fabuloso-destino-de-amelie-poulain-cke.jpg"
  },
  {
    nome: "10 things I hate about you",
    imagem:
      "https://cdn.theshoppers.com/wp-content/uploads/Captura-de-Tela-2019-01-02-a%CC%80s-20.56.46.png"
  }
];

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img src=" + listaFilmes[indice].imagem + ">");
}