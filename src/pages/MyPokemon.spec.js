import { render, screen } from '@testing-library/react';
import MyPokemons from './MyPokemons';
import Store from '../store';

test('Should Render MyPokemons Component', () => {
  render(<Store> <MyPokemons /></Store>
  );
  const myPokemons = screen.findAllByTestId()
  expect(myPokemons)
  expect(myPokemons).toHaveClass
  expect(myPokemons).toHaveDisplayValue
  expect(myPokemons).toHaveTextContent 
});