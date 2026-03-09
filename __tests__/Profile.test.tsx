import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import Profile from '@screens/profile/Profile';
import ProfileForm from '@components/profileForm';
import { validateEmail, validateUserName } from '@utils/helpers';

describe('Profile Screen Test', () => {
  it('should render app title', async () => {
    render(<Profile />);
    // screen.debug();
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('GREETING');
  });

  it('should validate Correct Full Name input', async () => {
    render(<ProfileForm />);
    const input = screen.getByPlaceholderText('Full Name');
    fireEvent.changeText(input, 'Kunal');
    expect(validateUserName(input.props.value)).toBe('');
  });

  it('should validate Empty Full Name input', async () => {
    render(<ProfileForm />);
    const input = screen.getByPlaceholderText('Full Name');
    fireEvent.changeText(input, '     ');
    expect(validateUserName(input.props.value)).toBe('Enter Full Name');
  });

  it('should validate correct Email input', () => {
    render(<ProfileForm />);
    const input = screen.getByPlaceholderText('Email');
    fireEvent.changeText(input, 'rahul@gmail.com');
    expect(validateEmail(input.props.value)).toBe('');
  });

  it('should validate incorrect Email input', () => {
    render(<ProfileForm />);
    const input = screen.getByPlaceholderText('Email');
    fireEvent.changeText(input, 'rahul @gmail.com');
    expect(validateEmail(input.props.value)).toBe(
      'Enter Valid Email containing @gmail.com',
    );
  });

  it('should validate incorrect Email input having special characters', () => {
    render(<ProfileForm />);
    const input = screen.getByPlaceholderText('Email');
    fireEvent.changeText(input, 'rahul$$@gmail.com');
    expect(validateEmail(input.props.value)).toBe(
      'Enter Valid Email containing @gmail.com',
    );
  });

  it('should validate empty Email input', async () => {
    render(<ProfileForm />);
    const input = screen.getByPlaceholderText('Email');
    fireEvent.changeText(input, '  ');
    expect(validateEmail(input.props.value)).toBe('Enter Email');
  });

  it('should test Alert when all fields gets filled', async () => {
    render(<ProfileForm />);

    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const mobileNumInput = screen.getByPlaceholderText('Mobile Number');
    const dobInput = screen.getByPlaceholderText('Select DOB');
    const ageInput = screen.getByPlaceholderText('AGE');
    const genderSelect = screen.getByTestId('MALE');
    const submitButton = screen.getByTestId('submitButton');

    // screen.debug()

    fireEvent.changeText(fullNameInput, 'Kunal');
    fireEvent.changeText(emailInput, 'kunal@gmail.com');
    fireEvent.changeText(mobileNumInput, '1234567890');
    fireEvent.changeText(dobInput, new Date().toDateString());
    // fireEvent.press(dobInput, 'onChange', 'onChange', null, new Date());
    fireEvent.changeText(ageInput, '22');
    fireEvent.press(genderSelect);
    fireEvent.press(submitButton);

    // expect(Alert.alert).toHaveBeenCalledTimes(1);
    expect(dobInput.props).toBe('kunal@gmail.com');
  });
});
