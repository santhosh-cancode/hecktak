import { render, screen } from '@testing-library/react';
import App from './App';

test('renders company brand name HECKTAK', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/HECKTAK/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
