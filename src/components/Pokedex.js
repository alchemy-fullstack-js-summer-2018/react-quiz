import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import styles from './Pokedex.css';

class Pokedex extends Component {
  static propTypes = {
    pokedex: PropTypes.array.isRequired,
    onSelect: PropTypes.func
  };

  render() {
    const { pokedex, onSelect } = this.props;

    return (
      <ul className={styles.pokedex}>
        {pokedex.map((pokemon, id) => (
          <Pokemon
            key={id}
            pokemon={pokemon}
            onSelect={onSelect}
          />
        ))}
      </ul>
    );
  }
}
 
export default Pokedex;