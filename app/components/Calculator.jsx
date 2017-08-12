import React from 'react';

import Key from 'Key';

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0"
    };

    this._inputDigit = this._inputDigit.bind(this);
  }

  _inputDigit(digit) {
    const {displayValue} = this.state;

    this.setState({
      displayValue: displayValue === "0" ? String(digit) : displayValue + String(digit)
    })
  }

  render() {
    const {displayValue} = this.state;

    return (
      <div className="calculator">
        <div className="screen" onClick={() => this._inputDigit(1)}> 
          {displayValue}
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
            <div className="key key-number" >+/-</div>
            <div className="key key-number" onClick={() => this._inputDigit(0)} >0</div>
            <div className="key key-number" >.</div>
          </div>

          <div className='keyboard-row'>
            <div className="key key-operator" >
              <div className="operator add">+</div>
            </div>
            <div className="key key-operator" >
              <div className="operator substract">-</div>
            </div>
            <div className="key key-operator" >
              <div className="operator multiply">x</div>
            </div>
            <div className="key key-operator" >
              <div className="operator divide">÷</div>
            </div>
          </div>

          <div className='keyboard-row'>
            <div className="key key-action" >
              <div className="action back">C</div>
            </div>
            <div className="key key-action" >
              <div className="action equal">=</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Calculator;