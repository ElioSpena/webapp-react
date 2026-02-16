import { useState } from "react";
import axios from "axios";

export default function NewMovieForm() {
  const movieData = {
    title: "",
    director: "",
    genre: "",
    image: "",
    release_year: "",
    abstract: "",
  };

  const [newMovie, setNewMovie] = useState(movieData);

  function updateMovie(event) {
    const value = event.target.value;
    const key = event.target.name;

    setNewMovie({
      ...newMovie,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post("http://localhost:3000/movies", newMovie).then((res) => {
      setNewMovie({ ...movieData });
      console.log("film aggiunto", res);
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
            value={newMovie.image}
            onChange={updateMovie}
            type="text"
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
          <input
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
