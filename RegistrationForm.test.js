import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationForm from './RegistrationForm';  // Adjust with the correct path to your component

describe('User Registration Form without Bug', () => {
  test('should show an error message for invalid email format with correct spelling', async () => {
    // Render the RegistrationForm component
    render(<RegistrationForm />);
    
    // Find the email input field and the submit button
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /sign up/i });
    
    // Simulate user typing an invalid email format
    userEvent.type(emailInput, 'janesmith@invalidemail');  // Invalid email format
    
    // Click the submit button
    fireEvent.click(submitButton);
    
    // Check if the error message is displayed with the correct spelling
    const errorMessage = await screen.findByText(/please enter a valid email address/i);
    
    // Assert that the error message with the correct spelling is shown
    expect(errorMessage).toBeInTheDocument();
  });
});
