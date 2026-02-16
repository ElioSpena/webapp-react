import { useState } from "react";
import axios from "axios";
import { validation } from "../utilities/validation";
import reviewFormFields from "../data/reviewsFormFields";
import InputsFieldBlock from "./InputsFieldBlock";

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
    let isNotValid = false;

    for (const key in templateErrors) {
      if (templateErrors[key] !== "") {
        isNotValid = true;
      }
    }
    if (isNotValid) {
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
    <form onSubmit={handleSubmit}>
      {reviewFormFields.map((field) => (
        <InputsFieldBlock
          key={field.name}
          htmlFor={field.id}
          labelTitle={field.labelTitle}
          error={error[field.name]}
          inputName={field.name}
          inputValue={review[field.name]}
          onChange={updateReview}
          inputType={field.type}
          required={field.required}
          inputId={field.id}
        />
      ))}

      <button className="btn btn-secondary" type="submit">
        Invia recensione
      </button>
    </form>
  );
}
