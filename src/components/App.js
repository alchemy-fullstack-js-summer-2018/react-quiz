import React, { Component } from 'react';
import pokedex from '../pokedex';
import Pokedex from './pokemon/Pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  handleFavorite = (favorite) => {
    console.log(favorite);
    // const { favorite } = this.state;
    this.setState({ favorite });
  };

  render() {
    const { pokedex, favorite } = this.state;
    return (
      
      <div>
        <section>
          {favorite 
            ? <p>Your favorite pokemon is: {favorite.pokemon} </p>
            : <p>Please select a favorite pokemon!</p>}
        </section>
        <section>
          <h1>Pokedex!</h1>
          <Pokedex pokedex={pokedex} onSelect={this.handleFavorite}/>
        </section>
      </div>
    );
  }
}

export default App;