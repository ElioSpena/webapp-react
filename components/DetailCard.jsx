export default function DetailCard({
  image,
  title,
  director,
  genre,
  abstract,
  updated_at,
}) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{director}</p>
            <p className="card-text">{genre}</p>
            <p className="card-text">{abstract}</p>
            <p className="card-text">
              <small className="text-body-secondary">{updated_at}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
