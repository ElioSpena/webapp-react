import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoad(true);

    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/not-found");
        }
      })
      .finally(() => setLoad(false));
  }, []);

  console.log(movies);

  function handleSearch(event) {
    event.preventDefault();
    axios
      .get("http://localhost:3000/movies", {
        params: { search },
      })
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/not-found");
        }
      })
      .finally(() => setLoad(false));
  }

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <section>
          <h2>Lista dei Films</h2>
          <form
            onSubmit={handleSearch}
            className="d-flex align-items-center"
            role="search"
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search"
            />
            <button type="search" className="btn btn-secondary">
              Cerca
            </button>
          </form>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1 my-4">
            {movies.map((m) => (
              <div className="col" key={m.id}>
                <Card
                  title={m.title}
                  abstract={m.abstract}
                  image={m.image}
                  id={m.id}
                  path={`/movies/${m.id}`}
                  linkDescription={"Mostra dettagli"}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
