import React, { Component } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {
    const { favorite } = this.state;

    return (
      <div>
        <h1>All the Pokemon</h1>
        <h2>Your favorite Pokemon:</h2>
        {favorite
          ? 
          <div>
            <h3>{favorite.pokemon}</h3>
            <img src={favorite.url_image}/>
          </div>
          : <p>Please select a favorite pokemon!</p>
        }
        <Pokedex
          pokedex={pokedex}
          onSelect={favorite}
        />
      </div>
    );
  }
}

export default App;