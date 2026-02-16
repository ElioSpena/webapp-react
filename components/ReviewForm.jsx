import { useState } from "react";
import axios from "axios";
import { validation } from "../utilities/validation";

export default function ReviewForm({ movieId, updateMovie }) {
  const reviewData = {
    name: "",
    vote: "",
    text: "",
  };

  const [review, setReview] = useState(reviewData);
  const [error, setError] = useState(reviewData);

  function updateReview(event) {
    const value = event.target.value;
    const key = event.target.name;

    setReview({
      ...review,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const templateErrors = validation(review);

    if (
      templateErrors.name !== "" ||
      templateErrors.vote !== "" ||
      templateErrors.text !== ""
    ) {
      setError(templateErrors);
      return;
    }
    setError({ ...reviewData });

    axios
      .post(`http://localhost:3000/movies/${movieId}/reviews`, review)
      .then(() => {
        (updateMovie(), setReview({ ...reviewData }));
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit} action="post">
      <div>
        <label className="form-label" htmlFor="name">
          Nome
        </label>
        <input
          required
          className={`form-control ${error.name ? "is-invalid" : ""}`}
          name="name"
          value={review.name}
          onChange={updateReview}
          type="text"
          id="name"
        />
        {error.name && <div className="invalid-feedback">{error.name}</div>}
      </div>
      <div>
        <label className="form-label" htmlFor="vote">
          Vote
        </label>
        <input
          required
          className={`form-control ${error.vote ? "is-invalid" : ""}`}
          name="vote"
          value={review.vote}
          onChange={updateReview}
          type="number"
          id="vote"
        />
        {error.vote && <div className="invalid-feedback">{error.vote}</div>}
      </div>
      <div>
        <label className="form-label" htmlFor="text">
          Recensione
        </label>
        <input
          required
          className={`form-control ${error.text ? "is-invalid" : ""}`}
          name="text"
          value={review.text}
          onChange={updateReview}
          type="textarea"
          id="text"
        />
        {error.text && <div className="invalid-feedback">{error.text}</div>}
      </div>
      <button className="btn btn-secondary" type="submit">
        Invia recensione
      </button>
    </form>
  );
}
