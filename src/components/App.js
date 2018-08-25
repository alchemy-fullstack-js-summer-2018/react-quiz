import React, { Component, Fragment } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';
import styles from './App.css';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {

    return (
      <Fragment>

        <div className={styles.App}>Total Pokemon: {this.state.pokedex.length}</div>
        <section>
          <Pokedex/>
        </section>
      </Fragment>
    );
  }
}

export default App;