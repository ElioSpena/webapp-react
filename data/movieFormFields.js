const movieFormFields = [
  {
    name: "title",
    labelTitle: "Titolo",
    type: "text",
    id: "title",
    required: true,
  },
  {
    name: "director",
    labelTitle: "Regista",
    type: "text",
    id: "director",
    required: true,
  },
  {
    name: "genre",
    labelTitle: "Genere",
    type: "text",
    id: "genre",
    required: true,
  },
  {
    name: "image",
    labelTitle: "Immagine",
    type: "file",
    id: "image",
    required: true,
  },
  {
    name: "release_year",
    labelTitle: "Anno di uscita",
    type: "number",
    id: "release-year",
    required: true,
  },
];

export default movieFormFields;
