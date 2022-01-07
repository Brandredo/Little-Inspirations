import "../CSS/Card.css";

function Card(prop) {
  return (
    <div className="card-container-outer rounded-xl bg-white shadow-lg">
      <div className="card-content">
        <div className="card-title">
          <h1>{prop.content.title}</h1>
        </div>
        <div className="card-body">
          <p className="about-content">{prop.content.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
