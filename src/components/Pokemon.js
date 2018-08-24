import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Pokemon.css';

export default class Pokemon extends Component {

  state = {
    favorite: false
  };

  static propTypes = {
    pokemon: PropTypes.object,
    onSelect: PropTypes.func.isRequired
  };

  render() {
    const { pokemon, onSelect } = this.props;
    const { favorite } = this.state;

    return (
      <li className={styles.pokemon}>
        <h3 style={{ color: `${pokemon.color_1}` }}>Pokemon: {pokemon.pokemon}</h3>
        <p style={{ color: `${pokemon.color_2}` }}>Type 1: {pokemon.type1}</p>
        <p style={{ color: `${pokemon.color_2}` }}>Type 2: {pokemon.type2}</p>
        <p style={{ color: `${pokemon.color_2}` }}>Attack: {pokemon.attack}</p>
        <p style={{ color: `${pokemon.color_2}` }}>Defense: {pokemon.defense}</p>
        <img src={pokemon.url_image}/>
        <button onClick={onSelect}>{favorite ? 'Remove from' : 'Add to'} favorites</button>
      </li>
    );
  }
}
