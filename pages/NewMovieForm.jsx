import { useState } from "react";
import axios from "axios";
import InputsFieldBlock from "../components/InputsFieldBlock";
import movieFormFields from "../data/movieFormFields";

export default function NewMovieForm() {
  const movieData = {
    title: "",
    director: "",
    genre: "",
    image: null,
    release_year: "",
    abstract: "",
  };

  const [newMovie, setNewMovie] = useState(movieData);

  function updateMovie(event) {
    const key = event.target.name;
    const type = event.target.type;

    setNewMovie({
      ...newMovie,
      [key]: type === "file" ? event.target.files[0] : event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    for (const key in newMovie) {
      const value = newMovie[key];
      formData.append(key, value);
    }

    axios
      .post("http://localhost:3000/movies", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setNewMovie({ ...movieData });
      });

    return;
  }

  return (
    <section>
      <h3>Inserisci un film</h3>

      <form onSubmit={handleSubmit}>
        {movieFormFields.map((field) => (
          <InputsFieldBlock
            key={field.name}
            htmlFor={field.id}
            labelTitle={field.labelTitle}
            /*  error={error[field.name]} --->   eseguire validazione */
            inputName={field.name}
            inputValue={
              field.type === "file" ? undefined : newMovie[field.name]
            }
            onChange={updateMovie}
            inputType={field.type}
            required={field.required}
            inputId={field.id}
          />
        ))}
        <div>
          <label className="form-label" htmlFor="abstract">
            descrizione
          </label>
          <textarea
            required
            className="form-control"
            name="abstract"
            value={newMovie.abstract}
            onChange={updateMovie}
            type="text"
            id="abstract"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Aggiungi film
        </button>
      </form>
    </section>
  );
}
