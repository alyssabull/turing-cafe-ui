import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import App from './App.js';

describe('App', () => {
  const mockAddNewReservation = jest.fn()

  beforeEach(() => {
    render(<App addNewReservation={mockAddNewReservation}/>)
  })

  it('should be able to post a new Reservation', () => {
    const nameInput = screen.getByPlaceholderText('Name')
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText('Time --:--')
    const numberInput = screen.getByPlaceholderText('Number of Guests')
    const submitButton = screen.getByText('SUBMIT RESERVATION')

    const userNameInput = 'Alyssa'
    const userDateInput = '12/25'
    const userTimeInput = '6:00'
    const userNumberInput = '2'

    fireEvent.change(nameInput, {target: { value: userNameInput }})
    fireEvent.change(dateInput, {target: { value: userDateInput }})
    fireEvent.change(timeInput, {target: { value: userTimeInput }})
    fireEvent.change(numberInput, {target: { value: userNumberInput }})
    fireEvent.click(submitButton)

    expect(nameInput).toBeInTheDocument()
    expect(dateInput).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(numberInput).toBeInTheDocument()
    expect(screen.getByText('CANCEL')).toBeInTheDocument()
  })
})
