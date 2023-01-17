import { render, screen } from '@testing-library/react';
import Input from './Input';

test('Should Render Input Component', () => {
  render(<Input />);
  const input = screen.getByPlaceholderText("Search");
  expect(input)
  expect(input).toHaveDisplayValue
  expect(input).toHaveClass
  
});