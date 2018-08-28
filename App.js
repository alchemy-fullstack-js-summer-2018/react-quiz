import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Pokedex from './Pokedex';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <div className={styles.app}>
          <main>
            <Route exact path="/Pokemon" component={Pokedex}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;