import React, { Component } from 'react';
import '../css/GameScoreboard.css';

class GameScoreboard extends Component {

  render() {
    const listOfPlayersTurns = this.props.playerTurns.map((number, i) =>
      <tr key={i}>
        <td>{i+1}</td>
        <td>{number.numberAskedByPlayer}</td>
        <td>{number.numberOfPluses}</td>
        <td>{number.numberOfMinuses}</td>
      </tr>
    );
    return (
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Player turns</th>
            <th>Pluses</th>
            <th>Minuses</th>
          </tr>
        </thead>

        <tbody>{listOfPlayersTurns}</tbody>
      </table>
    );
  }
}

export default GameScoreboard;
