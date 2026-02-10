import { Link } from "react-router-dom";

export default function Card({
  image,
  title,
  abstract,
  path,
  linkDescription,
}) {
  return (
    <div className="card">
      <img src={image} className="card-img-top image-fluid" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
      </div>
      <Link to={path} className="btn btn-primary">
        {linkDescription}
      </Link>
    </div>
  );
}
