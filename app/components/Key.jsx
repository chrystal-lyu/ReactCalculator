import React from 'react';

export class Key extends React.Component {
  render() {
    return (
      <div>{this.props.keySymbol}</div>
    )
  }
};

export default Key;