import React, { Component } from 'react';
import GameConsole from './components/GameConsole';
import ArrayOfNums from './ArrayOfNums';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { possibleValues: ArrayOfNums, playerTurns: [], computerTurns: [{ 0: 1234 }] };

    this.playerTurn = this.playerTurn.bind(this);
    this.computerTurn = this.computerTurn.bind(this);
  }

  playerTurn(numberAskedByPlayer) {

  }

  computerTurn(numberOfPlusesAndMinuses) {
    var num = parseInt(numberOfPlusesAndMinuses);
    if(this.state.computerTurns.length === 1 && !num) {
      console.log(this.state.possibleValues);
      var possibleValues = this.state.possibleValues.filter(function(num){
        var digits = (""+num).split("");
        return !digits.includes("1") && !digits.includes("2") && !digits.includes("3") && !digits.includes("4");
      });
      console.log(possibleValues);
    }
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
