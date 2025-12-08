import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for accessibility queries and other utilities
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with loading state when data is fetching', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message when external service fails', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'error', errorMessage: 'Failed to fetch data' });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Failed to fetch data/i)).toBeInTheDocument();
  });

  test('renders content successfully when external service returns data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: { key: 'value' } });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Data fetched successfully/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons and form inputs', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: { key: 'value' } });
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(button);
    
    const inputField = screen.getByPlaceholderText(/Enter value here/i);
    fireEvent.change(inputField, { target: { value: 'testValue' } });
  });

  test('ensures component is accessible', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: { key: 'value' } });
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('button', { name: /Submit/i })).toBeVisible();
    expect(screen.getByPlaceholderText(/Enter value here/i)).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data or null values', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: {} });
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for accessibility queries and other utilities
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with loading state when data is fetching', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message when external service fails', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'error', errorMessage: 'Failed to fetch data' });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Failed to fetch data/i)).toBeInTheDocument();
  });

  test('renders content successfully when external service returns data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: { key: 'value' } });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/Data fetched successfully/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons and form inputs', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: { key: 'value' } });
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(button);
    
    const inputField = screen.getByPlaceholderText(/Enter value here/i);
    fireEvent.change(inputField, { target: { value: 'testValue' } });
  });

  test('ensures component is accessible', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: { key: 'value' } });
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('button', { name: /Submit/i })).toBeVisible();
    expect(screen.getByPlaceholderText(/Enter value here/i)).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data or null values', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: {} });
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });
});