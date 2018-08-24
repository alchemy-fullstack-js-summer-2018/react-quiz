import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  
  static propTypes = {
    pokemon: PropTypes.object,
    onSelect: PropTypes.func
  };

  render() { 
    return (
      <li>
        <h3>Pokemon Component</h3>
      </li>
    );
  }
}
 
export default Pokemon;