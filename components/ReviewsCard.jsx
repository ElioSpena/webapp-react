export default function ReviewsCard({name, vote, text}) {
  return (
    <div className="card">
      <div className="card-body">
        <h4>{name}</h4>
        <span>{vote}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
