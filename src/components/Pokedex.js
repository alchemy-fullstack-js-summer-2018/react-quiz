import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.js';
import styles from './Pokedex.css';
export default class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.arrayOf(Object)
  };

  render() {
    const { pokedex } = this.props;

    return (
      <ul className={styles.pokedex}>
        {pokedex.map(([pokemon], i) => (
          <Pokemon key={i} pokemon={pokemon}/>
        ))}
      </ul>
    );
    
  }
}