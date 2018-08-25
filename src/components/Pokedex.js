import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.array,
    onSelect: PropTypes.func
  };
  
  render() { 
    const { pokedex } = this.props;
    if(!pokedex) return null;

    return (
      <ul>
        {pokedex.map(pokemon => {
          return <Pokemon key={pokemon.id} pokemon={pokemon}/>;
        })}
      </ul>
    );
  }
}
 
export default Pokedex;