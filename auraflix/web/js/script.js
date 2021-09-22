function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src =" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
  
  function adicionarNomeDoFilme() {
    var nomeFilmeFavorito = document.getElementById("nomeFilme").value;
    var elementoNomeFilmeFavorito = "<p>" + nomeFilmeFavorito + "</p>";
    var elementoNomeFilmes = document.getElementById("nome-filmes");
    elementoNomeFilmes.innerHTML =
      elementoNomeFilmes.innerHTML + elementoNomeFilmeFavorito;
  }
