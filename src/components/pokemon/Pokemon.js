import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  
  static Proptypes = {
    pokemon: PropTypes.object.isRequired
  }

  render() { 
    const { pokemon } = this.props;
    return ( 
      <li>
        <p>{pokemon.pokemon}</p>
      </li>
     );
  }
}
 
export default Pokemon;