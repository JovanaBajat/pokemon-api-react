import React, { Component } from 'react';
import request from 'request';

class DisplayPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display : ''
    }
  }

  componentWillReceiveProps(nextProps){
    request(`https://pokeapi.co/api/v2/pokemon-form/${nextProps.num}`,  (err, res, body) => {
      if(err) console.log(err)
      // console.log(body)
      // console.log(JSON.parse(body))
      this.setState({
        display : JSON.parse(body)

      });
      console.log(this.state.display);
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.display.name}</div>
        { this.state.display !== '' &&
          <img src={this.state.display.sprites.front_default} alt="" />
        }
      </div>
    );
  }

}

export default DisplayPokemon;
