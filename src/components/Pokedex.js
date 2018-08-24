import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.array
  };
  render() {
    const { pokedex } = this.props;
    return (
      <ul>
        {pokedex.map(pokemon => (
          <Pokemon
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </ul>
    );
  }
}

export default Pokedex;
