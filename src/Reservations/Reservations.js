import React from 'react';
import Card from '../Card/Card.js';
import './Reservations.css';

const Reservations = ({ reservations, deleteCard }) => {
  const reservationCards = reservations.map(reservation => {
    return(
      <Card
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        deleteCard={deleteCard}
        key={reservation.id}
      />
    )

  })

  return(
    <section className="resy-cards">
      {reservationCards}
    </section>
  )
}

export default Reservations;
