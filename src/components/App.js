import React, { Component, Fragment } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {
    const { pokedex, favorite } = this.state;

    return (
      <div>
        {favorite 
          ? <Fragment>
            <img src={favorite.image}/>
            <h2>favorite.name</h2>
          </Fragment>
          : <h2>Select your favorite pokemon.</h2>
        }
        <Pokedex pokedex={pokedex}/>
      </div>
    );
  }
}

export default App;