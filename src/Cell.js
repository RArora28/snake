import React from 'react';
import './index.css'

var getCellDimensions = function() {
  const height = 20, width = 20;
  return [height, width];
}

class Cell extends React.Component {
  render() {
    const [height, width] = getCellDimensions();
    const {i, j} = this.props;
    const colour = ((i + j) % 2 == 0) ? 'black': 'white';

    const style = {
      height: '' + height + 'px',
      width: '' + width + 'px',
      float: "left",
      background: colour,
    };

    return (
      <div style={style}>
      </div>
    );
  }
}

export default Cell;
