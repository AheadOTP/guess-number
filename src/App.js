import React, { Component } from 'react';
import GameConsole from './components/GameConsole';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { possibleValues: [], playerTurns: [], computerTurns: [] };

    this.playerTurn = this.playerTurn.bind(this);
    this.computerTurn = this.computerTurn.bind(this);
  }

  playerTurn(numberAskedByPlayer) {
    console.log(numberAskedByPlayer);
  }

  computerTurn(numberOfPlusesAndMinuses) {
    console.log(numberOfPlusesAndMinuses)
  }

  render() {
    return (
      <div className="App">
        <GameConsole
          playerTurn={this.playerTurn}
          computerTurn={this.computerTurn}
        />
      </div>
    );
  }
}

export default App;
