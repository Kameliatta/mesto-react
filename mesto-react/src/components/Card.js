import '../index.css';

export default function Card(props) {
  function handleClick() {
    props.onCardClick({name: props.name, src: props.src});
  } 
  return (
    <div className="element-container_template">
      <li className="element">
        <img onClick={handleClick} className="element__image" src={props.src} alt={props.name}/>
        <button className="element__delete-button"></button>
        <div className="element__container">
          <h3 className="element__container-text">{props.name}</h3>
          <button type="button" className="element__like-button"></button>
          <span className="element__like-button_count">{props.likes}</span>
        </div>
      </li>
    </div>
  )
}