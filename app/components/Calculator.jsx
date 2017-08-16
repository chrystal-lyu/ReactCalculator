import React from 'react';

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      prevValue: null,
      nextValue: null,
      displayValue: "0",
      waitingForOperand: false,
      operator: null
    };
  }

  _inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;

    if(waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === "0" ? String(digit) : displayValue + String(digit)
      });
    }
  }

  _toggleSign() {
    const { displayValue } = this.state;
    
    if(displayValue !== "0") {
      this.setState({
        displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
      });
    }
  }

  _inputDot() {
    const { displayValue, waitingForOperand } = this.state;

    if(waitingForOperand) {
      this.setState({
        displayValue: '0.',
        waitingForOperand: false
      })
    } else if(displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      });
    };
  }

  _performOperation(operator) {
    const { displayValue } = this.state;

    this.setState({
      prevValue: parseFloat(displayValue),
      waitingForOperand: true,
      operator: operator
    })
  }

  _getResult() {
    const { waitingForOperand, displayValue, prevValue, nextValue, operator, value} = this.state;
    let resultValue;
    if(operator === '+') {
      resultValue = prevValue + parseFloat(displayValue);
    } else if(operator === '-') {
      resultValue = prevValue - parseFloat(displayValue);
    } else if(operator === '*') {
      resultValue = prevValue * parseFloat(displayValue);
    } else {
      resultValue = prevValue / parseFloat(displayValue);
    }
    this.setState({
      value: resultValue,
      displayValue: String(resultValue),
      prevValue: resultValue,
    })
  }

  _clearAll() {
    this.setState({
      value: null,
      displayValue: "0",
      operator: null,
      prevValue: null,
      waitingForOperand: false
    });
  }

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="screen" onClick={() => this._inputDigit(1)}> 
          { displayValue }
        </div>        
        <div className='keyboard'>
          <div className='keyboard-row'>
            <div className="key key-number" onClick={() => this._inputDigit(1)} >1</div>
            <div className="key key-number" onClick={() => this._inputDigit(2)} >2</div>
            <div className="key key-number" onClick={() => this._inputDigit(3)} >3</div>
          </div>
          <div className='keyboard-row'>
            <div className="key key-number" onClick={() => this._inputDigit(4)} >4</div>
            <div className="key key-number" onClick={() => this._inputDigit(5)} >5</div>
            <div className="key key-number" onClick={() => this._inputDigit(6)} >6</div>
          </div>
          <div className='keyboard-row'>
            <div className="key key-number" onClick={() => this._inputDigit(7)} >7</div>
            <div className="key key-number" onClick={() => this._inputDigit(8)} >8</div>
            <div className="key key-number" onClick={() => this._inputDigit(9)} >9</div>
          </div>
          <div className='keyboard-row'>
            <div className="key key-number" onClick={() => this._toggleSign()}>+/-</div>
            <div className="key key-number" onClick={() => this._inputDigit(0)} >0</div>
            <div className="key key-number" onClick={()=> this._inputDot()}>.</div>
          </div>

          <div className='keyboard-row'>
            <div className="key key-operator" >
              <div className="operator add" onClick={() => this._performOperation('+')}>+</div>
            </div>
            <div className="key key-operator" >
              <div className="operator substract" onClick={() => this._performOperation('-')}>-</div>
            </div>
            <div className="key key-operator" >
              <div className="operator multiply" onClick={() => this._performOperation('*')}>x</div>
            </div>
            <div className="key key-operator" >
              <div className="operator divide" onClick={() => this._performOperation('/')}>÷</div>
            </div>
          </div>

          <div className='keyboard-row'>
            <div className="key key-action" >
              <div className="action back" onClick={() => this._clearAll()}>C</div>
            </div>
            <div className="key key-action" >
              <div className="action equal" onClick={() => this._getResult()}>=</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Calculator;