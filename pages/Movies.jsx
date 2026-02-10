import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

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
      {load && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <section className="row row-cols-2 row-cols-md-4 gap-5">
        {movies.map((m) => (
          <Card title={m.title} abstract={m.abstract} key={m.id} />
        ))}
      </section>
    </>
  );
}
