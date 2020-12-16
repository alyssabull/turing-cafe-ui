import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import App from './App.js';
import { fetchAllReservations, postNewReservation } from '../apiCalls.js';
jest.mock('../apiCalls.js')

describe('App', () => {

  beforeEach(() => {
    const mockResy = [{
      id: 1,
      name: 'John',
      date: '12/30',
      time: '6:45',
      number: '4'
    }]

    fetchAllReservations.mockResolvedValueOnce(mockResy);

    render(<App />)
  })

  it('should be able to post a new Reservation', async () => {
    const mockNewResy = {
      id: 2,
      name: 'Hank',
      date: '1/17',
      time: '4:30',
      number: '6'
    }

    postNewReservation.mockResolvedValueOnce(mockNewResy)

    const nameInput = screen.getByPlaceholderText('Name')
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText('Time --:--')
    const numberInput = screen.getByPlaceholderText('Number of Guests')
    const submitButton = screen.getByText('SUBMIT RESERVATION')


    fireEvent.change(nameInput, {target: { value: mockNewResy.name }})
    fireEvent.change(dateInput, {target: { value: mockNewResy.date }})
    fireEvent.change(timeInput, {target: { value: mockNewResy.time }})
    fireEvent.change(numberInput, {target: { value: mockNewResy.number }})
    fireEvent.click(submitButton)

    const newResyName = await waitFor(() => screen.getByText('Hank'))
    const newResyDate = await waitFor(() => screen.getByText('1/17'))
    const newResyTime = await waitFor(() => screen.getByText('4:30'))

    expect(newResyName).toBeInTheDocument()
    expect(newResyDate).toBeInTheDocument()
    expect(newResyTime).toBeInTheDocument()
  })
})
