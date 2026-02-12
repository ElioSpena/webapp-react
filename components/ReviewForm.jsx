import { useState } from "react";

export default function ReviewForm() {
  const reviewData = {
    name: "",
    vote: 0,
    text: "",
  };

  const [review, setReview] = useState(reviewData);

  function updateReview(event) {
    event.preventDefault();
    const value = event.target.value;
    const key = event.target.name;
    setReview({
      ...review,
      [key]: value,
    });
  }

  return (
    <form action="">
      <div>
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          value={review.name}
          onChange={updateReview}
          type="text"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="number">Vote</label>
        <input
          name="vote"
          value={review.vote}
          onChange={updateReview}
          type="number"
          id="vote"
        />
      </div>
      <div>
        <label htmlFor="text">Recensione</label>
        <input
          name="text"
          value={review.text}
          onChange={updateReview}
          type="text"
          id="text"
        />
      </div>
      <button className="btn btn-secondary" type="submit">
        Invia recensione
      </button>
    </form>
  );
}
