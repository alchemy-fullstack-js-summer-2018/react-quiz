import React, { Component } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  handleSelect = (pokemon) => {

  };

  render() {
    console.log(pokedex);
    const { favorite } = this.state;

    return (
      <div>
        <div>Hello React Quiz! {this.state.pokedex.length}</div>
        {favorite
          ? <div>
            <ul>
              <Pokemon pokemon={favorite}/>
            </ul>
          </div>
          : <p>Select a favorite pokemon</p>
        }
        <Pokedex
          pokedex={this.state.pokedex}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;