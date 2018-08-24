import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.array,
    onSelect: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { pokedex } = this.props;
    if(!pokedex) return;

    this.setState(pokedex);
  }

  render() {
    const { pokemon, onSelect } = this.props;

    return (
      <ul>
        {Pokemon.map(pokemon => (
          <Pokemon
            name={pokemon.name}
            image={pokemon.url_image}
          />
        ))}
      </ul>
      
    );
  }
}

export default Pokedex;