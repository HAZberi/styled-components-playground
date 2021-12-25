export default function Card({ item: { title, body, image } }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </div>
  );
}
