import "./Card.styles.css";
type CardProps = {
  id: string;
  name: string;
  imageUrl: string;
};

const Card = ({ id, name, imageUrl }: CardProps) => {
  return (
    <div key={id} className="card__container">
      <div className="card__container-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="card__container-name">{name}</div>
    </div>
  );
};

export default Card;
