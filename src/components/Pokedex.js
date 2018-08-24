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
    const { pokedex } = this.state;
    const { onSelect } = this.props;

    return (
      <div>
        <h1>Pokedex</h1>
        <Pokemon onSelect={add}/>

      </div>
      
    );
  }
}

export default Pokedex;