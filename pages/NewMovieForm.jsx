import { useState } from "react";
import axios from "axios";

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
        <div>
          <label className="form-label" htmlFor="title">
            Titolo
          </label>
          <input
            required
            className="form-control"
            name="title"
            value={newMovie.title}
            onChange={updateMovie}
            type="text"
            id="title"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="director">
            Regista
          </label>
          <input
            required
            className="form-control"
            name="director"
            value={newMovie.director}
            onChange={updateMovie}
            type="text"
            id="director"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="genre">
            Genere
          </label>
          <input
            required
            className="form-control"
            name="genre"
            value={newMovie.genre}
            onChange={updateMovie}
            type="text"
            id="genre"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="image">
            immagine
          </label>
          <input
            required
            className="form-control"
            name="image"
            onChange={updateMovie}
            type="file"
            id="image"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="release-year">
            anno di uscita
          </label>
          <input
            required
            className="form-control"
            name="release_year"
            value={newMovie.release_year}
            onChange={updateMovie}
            type="number"
            id="release-year"
          />
        </div>

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
