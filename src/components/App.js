import React, { Component, Fragment } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  handleSelect = favorite => {
    this.setState({ favorite });
  };

  render() {
    const { pokedex, favorite } = this.state;

    console.log(favorite);
    return (
      <div>
        {favorite 
          ? <Fragment>
            <h1>Your Favorite Pokemon!</h1>
            <p>{favorite.pokemon}</p>
            <img src={favorite.url_image}/>
            <hr/>
          </Fragment>
          : <h2>Select your favorite pokemon.</h2>
        }
        <Pokedex 
          pokedex={pokedex}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;