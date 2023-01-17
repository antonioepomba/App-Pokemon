import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo_image from "../../assets/image/logo_image_prev_ui.png";
import './header.css';

const Header = () => {
  const history = useHistory();

  const loadPkemonList = () => {
    return history.push('/pokemonApp')
  }
  useEffect(() => {
    loadPkemonList()
  })
  return (
    <header className="header primary">
      <nav className="nav-container">
        <div className="logo">
          PokeDex
          {<img src={logo_image} alt="pokeball" width="58" />}
        </div>
        <button onClick={() => history.push('/pokemonApp/mypokemons')} className="button"> My Favourite Pokemons</button>
      </nav>
    </header>
  )
}

export default Header;