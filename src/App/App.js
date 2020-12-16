import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations.js';
import Form from '../Form/Form.js';
import { fetchAllReservations, postNewReservation, deleteReservation } from '../apiCalls.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetchAllReservations().then(allReservations => this.setState({reservations: allReservations })).catch(err => err.message)
  }

  addNewReservation = (reservationInfo) => {
    postNewReservation(reservationInfo).then(updatedReservations => this.setState({reservations: [...this.state.reservations, updatedReservations]})).catch(err => err)
  }

  deleteCard = (id) => {
    deleteReservation(id).then(deletedResy => this.componentDidMount()).catch(err => err)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addNewReservation={this.addNewReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations
            reservations={this.state.reservations}
            deleteCard={this.deleteCard}
          />
        </div>
      </div>
    )
  }
}

export default App;
