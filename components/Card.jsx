export default function Card({ title, abstract }) {
  return (
    <div className="col">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{abstract}</p>
        </div>
      </div>
    </div>
  );
}
