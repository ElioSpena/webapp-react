import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { useSearch } from "../context/SearchContext";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);
  const { search } = useSearch();

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

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1">
          {filteredMovies.map((m) => (
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
