import { useEffect, useState } from "react";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoad(false));
  }, []);

  return (
    <>
      <section className="row row-cols-2 row-cols-md-4 gap-5">
        {load && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {movies.map((m) => (
          <div className="col" key={m.id}>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{m.title}</h5>
                <p className="card-text">{m.abstract}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
