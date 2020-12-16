import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Reservations from './Reservations.js';

describe('Reservations', () => {
  const mockDeleteCard = jest.fn()

  beforeEach(() => {
    const mockResys =[{
      id: 1,
      name: 'Nemo',
      date: '12/31',
      time: '6:30',
      number: '2'
    }]

    render(
      <Reservations
        reservations={mockResys}
        deleteCard={mockDeleteCard}
      />
    )
  })

  it('should render reservations correctly', () => {
    const resyName = screen.getByText('Nemo')
    const resyDate = screen.getByText('12/31')
    const resyTime = screen.getByText('6:30')
    const resyNumber = screen.getByText('Number of Guests: 2')

    expect(resyName).toBeInTheDocument()
    expect(resyDate).toBeInTheDocument()
    expect(resyTime).toBeInTheDocument()
    expect(resyNumber).toBeInTheDocument()
  })
})
