import React from 'react';
import './card-styles.css'

const Card = (props) => {

  return (
  <div className="card-container">
    {/* <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} /> */}
    <img id="avatar" alt="monster" src={`https://api.adorable.io/avatars/120/${props.monster.id}`} />
    <h1>{props.monster.username}</h1>
    <h2>"{props.monster.company.bs}"</h2>
  </div>
  )
};

export default Card;

