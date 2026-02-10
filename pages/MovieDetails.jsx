import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import axios from "axios";
import DetailCard from "../components/DetailCard";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoad(false));
  }, [id]);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <DetailCard
          image={movie.image}
          title={movie.title}
          director={movie.director}
          genre={movie.genre}
          abstract={movie.abstract}
          updated_at={movie.updated_at}
        />
      )}
    </>
  );
}
