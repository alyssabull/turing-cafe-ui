import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Form from './Form.js';

describe('Form', () => {
  const mockAddNewReservation = jest.fn()

  beforeEach(() => {
    render(
      <Form
        addNewReservation={mockAddNewReservation}
      />
    )
  })

  it('should render a form correctly', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText('Time --:--')
    const numberInput = screen.getByPlaceholderText('Number of Guests')
    const submitButton = screen.getByText('SUBMIT RESERVATION')

    expect(nameInput).toBeInTheDocument()
    expect(dateInput).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(numberInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('should update the forms value as a user types', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText('Time --:--')
    const numberInput = screen.getByPlaceholderText('Number of Guests')
    const userNameInput = 'Alyssa'
    const userDateInput = '12/25'
    const userTimeInput = '6:00'
    const userNumberInput = '2'

    fireEvent.change(nameInput, {target: { value: userNameInput }})
    fireEvent.change(dateInput, {target: { value: userDateInput }})
    fireEvent.change(timeInput, {target: { value: userTimeInput }})
    fireEvent.change(numberInput, {target: { value: userNumberInput }})

    expect(nameInput.value).toBe('Alyssa')
    expect(dateInput.value).toBe('12/25')
    expect(timeInput.value).toBe('6:00')
    expect(numberInput.value).toBe('2')
  })

  it('should be call addNewReservation with correct params', () => {
    const mockResy = {
      name: 'Gordon',
      date: '2/14',
      time: '7:30',
      number: '2'
    }

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText('Time --:--')
    const numberInput = screen.getByPlaceholderText('Number of Guests')

    fireEvent.change(nameInput, {target: { value: mockResy.name }})
    fireEvent.change(dateInput, {target: { value: mockResy.date }})
    fireEvent.change(timeInput, {target: { value: mockResy.time }})
    fireEvent.change(numberInput, {target: { value: mockResy.number }})
    fireEvent.click(screen.getByText('SUBMIT RESERVATION'))

    expect(mockAddNewReservation).toHaveBeenCalledWith(mockResy)
  })
})
