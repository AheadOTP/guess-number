import React, { Component } from 'react';

class GameScoreboard extends Component {

  render() {
    const listOfPlayersTurns = this.props.playerTurns.map((number, i) =>
      <tr key={i}>
        <td>{i+1}</td>
        <td>{number}</td>
      </tr>
    );
    return (
      <table><tbody>{listOfPlayersTurns}</tbody></table>
    );
  }
}

export default GameScoreboard;
