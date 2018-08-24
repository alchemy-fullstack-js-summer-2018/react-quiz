import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokedex extends Component {

  static propTypes = {
    pokedex: PropTypes.array,
    onSelect: PropTypes.func
  };
  
  render() { 
    return (
      <div>
        <h2>Pokedex Component</h2>
      </div>
    );
  }
}
 
export default Pokedex;