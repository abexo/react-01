export default function CoreConcept({image, title, description}) {
  return (
  <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
  );
}