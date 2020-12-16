import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations.js';
import Form from '../Form/Form.js';
import { fetchAllReservations } from '../apiCalls.js';
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

    this.setState({ reservations: [...this.state.reservations, reservationInfo]})
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
          />
        </div>
      </div>
    )
  }
}

export default App;
