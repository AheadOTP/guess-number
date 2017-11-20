import React, { Component } from 'react';

class GameConsole extends Component {
  constructor() {
    super();

    this.state = { turnOfPlayer: true };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var console = document.forms.gameConsole;
    if (this.state.turnOfPlayer) {
      this.props.playerTurn(console.numberAskedByPlayerOrNumberOfPlusesAndMinuses.value);
    } else {
      this.props.computerTurn(console.numberAskedByPlayerOrNumberOfPlusesAndMinuses.value);
    }

    this.setState({ turnOfPlayer: !this.state.turnOfPlayer });
    console.numberAskedByPlayerOrNumberOfPlusesAndMinuses.value = '';
  }

  render() {
    return (
      <div>
        <form name="gameConsole" onSubmit={this.handleSubmit}>
          <input type="text" name="numberAskedByPlayerOrNumberOfPlusesAndMinuses" placeholder="1234 or 02" />
          <button>Answer</button>
        </form>
      </div>
    );
  }
}

export default GameConsole;
