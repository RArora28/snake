import React from 'react';
import Cell from './Cell'
import './index.css';

var initBoard = function () {
  const nrows = 3, ncols = 10;
  const cellHeight = 2000, cellWidth = 200;
  var board = [];
  for(var i = 0; i < nrows; ++i) {
    var row = [];
    for(var j = 0; j < ncols; ++j) {
      row.push(<Cell
                  cellHeight={cellHeight}
                  cellWidth={cellWidth}
                />);
    }
    board.push(<td>{row}</td>);
  }
  return board;
}

class Game extends React.Component {
  render() {
    var board = initBoard();
    return (
      <div className="Game-Board">
        <table>{board}</table>
      </div>
    );
  }
}

export default Game;
