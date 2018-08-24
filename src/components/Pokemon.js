import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Pokemon.css';

class Pokemon extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    onSelect: PropTypes.func
  };

  onSelect() {
    const { pokemon } = this.props;
    this.setState(pokemon);
  }

  render() {
    const { pokemon } = this.props;
    const { url_image, type_1, type_2, attack, defense } = pokemon;

    return (
      <li className={styles.pokemon}>
        <h3>{pokemon.pokemon}</h3>
        <img src={url_image}/>
        <p>Type 1: {type_1}</p>
        <p>Type 2: {type_2}</p>
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <button name="favorite" onClick={this.onSelect}>Favorite</button>
      </li>
    );
  }
}
 
export default Pokemon;