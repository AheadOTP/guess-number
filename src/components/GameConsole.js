import React, { Component } from 'react';

class GameConsole extends Component {
  constructor() {
    super();

    this.state = { turnOfPlayer: true };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let console = document.forms.gameConsole;
    if (this.props.turnOfPlayer) {
      this.props.playerTurn(console.numberAskedByPlayerOrNumberOfPlusesAndMinuses.value);
    } else {
      this.props.computerTurn(console.numberAskedByPlayerOrNumberOfPlusesAndMinuses.value);
    }

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
