import React from 'react';

import Keyboard from 'Keyboard';
import Screen from 'Screen';

export class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Screen {...this.props}/>
        <Keyboard {...this.props}/>
      </div>
    )
  }
};

export default Calculator;