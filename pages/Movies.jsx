import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function Movies() {
  const [movies, setMovies] = useState(null);
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
      {load ? (
        <Loading />
      ) : (
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1">
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
        </section>
      )}
    </>
  );
}
