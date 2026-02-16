function validation(rev) {
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

export { validation };
