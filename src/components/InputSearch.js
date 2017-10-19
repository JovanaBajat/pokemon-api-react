import React, { Component } from 'react';

class InputSearch extends Component {
  state = {
    inputValue : '' //state de base, comme placeholder
  }
//mot a jour le state et stocks, gere la veleur de l'input
handleInputChange = (e) => {
  console.log(e.target.value);
  // this.props.funk(e.target.value)
  this.setState({
    inputValue : e.target.value
  });
}
//met a jour le state du parent
updateValue = (e) => {
  e.preventDefault(); //pour eviter recharger de la page du au form
  this.props.func(this.state.inputValue);
  this.setState({
    inputValue : '' //a chaque fois qu'on fait entrer, efface le champs
  })
}
  render() {
    return (
      <form>
        <input type="text"
          onChange={this.handleInputChange}
          value={this.state.inputValue}/>
        <button onClick={this.updateValue}>Search Pokemon</button>
      </form>
  );
  }

}

export default InputSearch;
