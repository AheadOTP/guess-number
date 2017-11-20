import React, { Component } from 'react';
import GameScoreboard from './components/GameScoreboard';
import GameConsole from './components/GameConsole';
import ArrayOfNums from './ArrayOfNums';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      possibleValues: ArrayOfNums,
      computerNumber: ArrayOfNums[Math.floor(Math.random()*ArrayOfNums.length)],
      playerTurns: [],
      computerTurns: [1234],
      turnOfPlayer: true
     };

    this.playerTurn = this.playerTurn.bind(this);
    this.computerTurn = this.computerTurn.bind(this);
  }

  playerTurn(numberAskedByPlayer) {
    let repeats;
    this.state.playerTurns.forEach(function(element) {
      if(Object.values(element).includes(numberAskedByPlayer)) repeats = true;
    });

    if(repeats) {
      console.log("try to ask other number");
    } else {
      let obj = {
        numberAskedByPlayer: numberAskedByPlayer,
        numberOfPlusesAndMinuses: 42
      };
      this.setState({ playerTurns: [...this.state.playerTurns, obj]});

      this.setState({  turnOfPlayer: false });
      console.log(this.state.playerTurns);
    }
  }

  computerTurn(numberOfPlusesAndMinuses) {
    if(this.state.computerTurns.length === 1 && numberOfPlusesAndMinuses === "0") {
      console.log(this.state.possibleValues);
      let possibleValues = this.state.possibleValues.filter(function(num){
        let digits = (""+num).split("");
        return !digits.includes("1") && !digits.includes("2") && !digits.includes("3") && !digits.includes("4");
      });
      this.setState({ possibleValues });
      console.log(possibleValues);
    }
    else if(this.state.computerTurns.length === 1 && numberOfPlusesAndMinuses === "4") {
      console.log(this.state.possibleValues);
      let possibleValues = this.state.possibleValues.filter(function(num){
        let digits = (""+num).split("");
        return digits.includes("1") && digits.includes("2") && digits.includes("3") && digits.includes("4");
      });
      this.setState({ possibleValues });
      console.log(possibleValues);
    }
    this.setState({ turnOfPlayer: true })
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
          turnOfPlayer={this.state.turnOfPlayer}
        />
      </div>
    );
  }
}

export default App;
