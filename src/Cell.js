import React from 'react';
import './index.css'

class Cell extends React.Component {
  render() {
    const style = {
      height: toString(this.props.height) + "px",
      width: toString(this.props.width) + "px",
      border: "dotted"
    };
    return (
      <div
        style={style}
       >
        abcd
      </div>
    );
  }
}

export default Cell;
