import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {

  static propTypes = {
    poke : PropTypes.object.isRequired
  };
  render() { 
    const { poke } = this.props;
    const { pokemon, url_image, type_1, type_2, attack, defense } = poke;
    return ( 
      <li>
        <h3>{pokemon}</h3>
        <img width="200px" src={url_image}/>
        <p>{type_1}, {type_2}</p>
        <p>Attack: {attack}, Defense: {defense}</p>
      </li>
    );
  }
}
 
export default Pokemon;