import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = (event) => {
    event.preventDefault()
    if (this.state.name !== '' && this.state.date !== '' && this.state.time !== '' && this.state.number !== '') {
      const newResy = {...this.state}

      this.props.addNewReservation(newResy)
      this.clearInputs()
    } else {
      alert('Please fill out all input fields!')
    }

  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  }

  render() {
    return(
      <section className="form">
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='time'
          placeholder='Time --:--'
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='number'
          placeholder='Number of Guests'
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={event => this.submitReservation(event)}>SUBMIT RESERVATION</button>
      </section>
    )
  }
}

export default Form;
