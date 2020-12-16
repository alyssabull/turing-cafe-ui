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
  })
})
