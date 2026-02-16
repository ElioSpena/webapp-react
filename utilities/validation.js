function validateReview(rev) {
  const handleError = { name: "", vote: "", text: "" };

  if (
    rev.name === "" ||
    !isNaN(rev.name) ||
    rev.name.length < 2 ||
    rev.name.length > 20
  ) {
    handleError.name = "Inserire un nome valido";
  }

  if (rev.vote < 0 || rev.vote > 5 || isNaN(rev.vote)) {
    handleError.vote = "Inserisci un numero compreso tra 0 e 5";
  }

  if (rev.text.length < 10 || rev.text.length > 500) {
    handleError.text =
      "Inserisci una recensione compresa tra 10 e 500 caratteri";
  }
  return handleError;
}

function validateMovie(movie) {
  const handleError = {
    title: "",
    director: "",
    genre: "",
    image: "",
    release_year: "",
  };
  const allowdFiles = ["image/png", "image/jpeg", "image/webp"];

  if (movie.title === "" || movie.title.length < 2 || movie.title.length > 50) {
    handleError.title = "Inserire un titolo valido";
  }

  if (
    movie.director === "" ||
    movie.director.length < 5 ||
    movie.director.length > 20
  ) {
    handleError.director = "Inserisci il nome del regista";
  }

  if (movie.genre === "" || movie.genre.length < 5 || movie.genre.length > 20) {
    handleError.genre = "Inserisci uno o più generi";
  }

  if (!movie.image) {
    handleError.image = "Carica la copertina del film";
  }

  if (!allowdFiles.includes(movie.image.type)) {
    handleError.image = "File consentiti: png, jpeg, webp";
  }

  if (movie.release_year.length < 4) {
    handleError.release_year = "Inserisci l'anno di uscita del film";
  }

  return handleError;
}

export { validateReview, validateMovie };
