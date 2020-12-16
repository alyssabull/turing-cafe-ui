import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number, deleteCard}) => {
  return(
    <section className="card">
      <h1>{name}</h1>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Number of Guests: {number}</h3>
      <button onClick={() => deleteCard(id)}>CANCEL</button>
    </section>
  )
}

export default Card;
