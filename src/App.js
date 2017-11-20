import React, { Component } from 'react';
import GameScoreboard from './components/GameScoreboard';
import GameConsole from './components/GameConsole';
import ArrayOfNums from './ArrayOfNums';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { possibleValues: ArrayOfNums, playerTurns: [], computerTurns: [1234] };

    this.playerTurn = this.playerTurn.bind(this);
    this.computerTurn = this.computerTurn.bind(this);
  }

  playerTurn(numberAskedByPlayer) {
    this.setState({ playerTurns: [...this.state.playerTurns, numberAskedByPlayer]});
    console.log(this.state.playerTurns);
  }

  computerTurn(numberOfPlusesAndMinuses) {
    if(this.state.computerTurns.length === 1 && numberOfPlusesAndMinuses === "0") {
      console.log(this.state.possibleValues);
      var possibleValues = this.state.possibleValues.filter(function(num){
        var digits = (""+num).split("");
        return !digits.includes("1") && !digits.includes("2") && !digits.includes("3") && !digits.includes("4");
      });
      this.setState({ possibleValues });
      console.log(possibleValues);
    }
    else if(this.state.computerTurns.length === 1 && numberOfPlusesAndMinuses === "4") {
      console.log(this.state.possibleValues);
      var possibleValues = this.state.possibleValues.filter(function(num){
        var digits = (""+num).split("");
        return digits.includes("1") && digits.includes("2") && digits.includes("3") && digits.includes("4");
      });
      this.setState({ possibleValues });
      console.log(possibleValues);
    }
  }

  render() {
    return (
      <div className="App">
        <GameScoreboard
          playerTurns={this.state.playerTurns}
        />
        <GameConsole
          playerTurn={this.playerTurn}
          computerTurn={this.computerTurn}
        />
      </div>
    );
  }
}

export default App;
