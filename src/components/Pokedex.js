import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.array,
    onSelect: PropTypes.func
  };
  
  render() { 
    return (
      <ul>
        <h2>Pokedex Component</h2>

        <Pokemon />
      </ul>
    );
  }
}
 
export default Pokedex;