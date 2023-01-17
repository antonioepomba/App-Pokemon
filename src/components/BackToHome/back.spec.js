import { render, screen } from '@testing-library/react';
import BackToHome from './BackToHome';
import Store from '../../store';

test('Should Render BackHome Component', () => {
  render(<Store> <BackToHome /></Store>
  );
  const backHome = screen.findAllByTestId()
  expect(backHome)
  expect(backHome).toHaveClass
  expect(backHome).toHaveDisplayValue
  expect(backHome).toHaveTextContent 
});