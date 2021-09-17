const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("teste");

  var tituloFilmePesquisado = document.getElementById("entradaFilme").value;

  for (var indice = 0; indice < listaNomes.length; indice++) {
    if (tituloFilmePesquisado === listaNomes[indice]) {
      alert("Este filme já foi inserido na lista");
    } else {
      alert(
        "Ajude-nos a melhorar, solicite este filme enviando-nos uma mensagem."
      );
    }
  }
});

var listaNomes = [
  "Transformers",
  "Homem de Ferro",
  "Amelie",
  "10 things I hate about you"
];

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

//O que eu quero fazer:

//Uma caixa de pesquisa e o usuário escreve o nome do filme. Se o nome escrito pelo usuário for igual ao nome do filme na lista, aparece "Este filme já existe na lista". Senão, aparece uma mensagem ou alerta: "Ajude-nos a melhorar, solicite este filme enviando-nos uma mensagem."