import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations.js';
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
    fetchAllReservations().then(allReservations => console.log(allReservations)).catch(err => err.message)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
        
        </div>
      </div>
    )
  }
}

export default App;
