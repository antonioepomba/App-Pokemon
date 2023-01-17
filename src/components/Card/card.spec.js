import { render, screen } from '@testing-library/react';
import Card from './Card';
import Store from '../../store';

test('Should Render Card Component', () => {
  render(<Store> <Card /></Store>
  );
  const card = screen.findAllByTestId()
  expect(card)
  expect(card).toHaveClass
  expect(card).toHaveDisplayValue
  expect(card).toHaveTextContent 
});