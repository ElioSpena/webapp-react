import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import axios from "axios";
import DetailCard from "../components/DetailCard";
import ReviewForm from "../components/reviewForm";

export default function MovieDetails() {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getMovie();
  }, [slug]);

  function getMovie() {
    axios
      .get(`http://localhost:3000/movies/${slug}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/movies");
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
          <DetailCard
            image={movie.image}
            title={movie.title}
            director={movie.director}
            genre={movie.genre}
            abstract={movie.abstract}
            updated_at={movie.updated_at}
            reviews={movie.reviews}
          />

          <ReviewForm movieId={movie.id} updateMovie={getMovie} />
        </section>
      )}
    </>
  );
}
