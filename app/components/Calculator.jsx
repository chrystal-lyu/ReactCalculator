import React from 'react';

import Keyboard from 'Keyboard';
import Screen from 'Screen';

export class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Screen />
        <Keyboard />
      </div>
    )
  }
};

export default Calculator;