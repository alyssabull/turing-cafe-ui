import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Card from './Card.js';

describe('Card', () => {
  beforeEach(() => {
    const mockCard = {
      id: 1,
      name: 'Alyssa',
      date: '12/25',
      time: '6:00',
      number: '2'
    }

    render(<Card
        id={mockCard.id}
        name={mockCard.name}
        date={mockCard.date}
        time={mockCard.time}
        number={mockCard.number}
        key={mockCard.id}
      />)
  })

  it('should render correctly', () => {
    const cardName = screen.getByText('Alyssa')
    const cardDate = screen.getByText('12/25')
    const cardTime = screen.getByText('6:00')
    const cardNumber = screen.getByText('Number of Guests: 2')

    expect(cardName).toBeInTheDocument()
    expect(cardDate).toBeInTheDocument()
    expect(cardTime).toBeInTheDocument()
    expect(cardNumber).toBeInTheDocument()
  })
})
