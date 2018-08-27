import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  render() { 
    const { pokemon, onSelect } = this.props;
    const { pokemon: name, type_1, type_2, url_image, attack, defense, color_1, color_2 } = pokemon;
    const background = { background: color_1 };
    const color = { color: color_2 };

    return (
      <li onClick={() => onSelect(pokemon)} style={background}>
        <h4 style={color}>{name} | {type_1} {type_2 !== 'NA' && type_2}</h4>
        <img src={url_image}/>
        <p>Attack: {attack} | Defense: {defense}</p>
      </li>
    );
  }
}

export default Pokemon;