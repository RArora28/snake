import React from 'react';
import Cell from './Cell'
import './index.css';

var initBoard = function () {
  const nrows = 30, ncols = 50;
  var board = [];
  for(var i = 0; i < nrows; ++i) {
    var row = [];
    for(var j = 0; j < ncols; ++j) {
      row.push(<Cell i={i} j={j}/>);
    }
    board.push(row);
  }
  return board;
}

class Game extends React.Component {
  render() {
    var board = initBoard();
    return (
      <div className="Game-Board">
        {board}
      </div>
    );
  }
}

export default Game;
