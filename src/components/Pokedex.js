import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import styles from '../styles/Pokedex.css';

export default class Pokedex extends Component {

  static propTypes = {
    pokemon: PropTypes.arrayOf(Object)
  };

  render() {
    const { pokemon } = this.props;

    return (
      <ul className={styles.list}>
        {pokemon.map((pokemon, i) => (
          <PokemonCard key={i} pokemon={pokemon}/>
        ))}
      </ul>
    );
  }
}