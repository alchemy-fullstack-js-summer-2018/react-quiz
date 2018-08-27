import React, { Component } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';
import styles from './App.css';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  handleFavorite = pokemon => this.setState({ favorite: pokemon });

  render() {
    const { pokedex, favorite } = this.state;

    return (
      <div className={styles.app}>
        <h1>My First Pokedex</h1>
        <section>
          <h2>Favorite Pokemon:</h2>
          {favorite
            ? <div>
              <h4>{favorite.pokemon}</h4>
              <img src={favorite.url_image}/>
            </div>
            : <p>Select a favorite pokemon</p>
          }
        </section>
        <section>
          <h2>List of Pokemon:</h2>
          <Pokedex pokedex={pokedex} onSelect={this.handleFavorite}/>
        </section>
      </div>
    );
  }
}



export default App;