import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pokedex from '../pokedex';


class Pokemon extends Component {

  static propTypes = {
    pokemon: PropTypes.object,
    onSelect: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { pokemon } = this.props;
    if(!pokemon) return;

    this.setState(pokemon);
  }

  handleFavorite() {
    this.setState({
      name: '',
      image: '',
      type1: '',
      type2: '',
      attack: 0,
      defense: 0,
    });
  }


  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <h1>Pokemon</h1>
        <Pokemon onSelect={add}/>

      </div>
      
    );
  }
}

export default Pokemon;