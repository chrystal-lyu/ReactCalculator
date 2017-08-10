import React from 'react';

import Key from 'Key';

export class Calculator extends React.Component {
  render () {
    return (
      <div className='keyboard'>
        <div className='keyboard-row'>
          <Key keyType='number' keyValue='1' keySymbol='1' />
          <Key keyType='number' keyValue='2' keySymbol='2' />
          <Key keyType='number' keyValue='3' keySymbol='3' />
        </div>
        <div className='keyboard-row'>
          <Key keyType='number' keyValue='4' keySymbol='4' />
          <Key keyType='number' keyValue='5' keySymbol='5' />
          <Key keyType='number' keyValue='6' keySymbol='6' />
        </div>
        <div className='keyboard-row'>
          <Key keyType='number' keyValue='7' keySymbol='7' />
          <Key keyType='number' keyValue='8' keySymbol='8' />
          <Key keyType='number' keyValue='9' keySymbol='9' />
        </div>
        <div className='keyboard-row'>
          <Key keyType='number' keyValue='+-' keySymbol='+/-' />
          <Key keyType='number' keyValue='0' keySymbol='0' />
          <Key keyType='number' keyValue='.' keySymbol='.' />
        </div>

        <div className='keyboard-row'>
          <Key keyType='operator' keyValue='divide' keySymbol='÷' />
          <Key keyType='operator' keyValue='substract' keySymbol='-' />
          <Key keyType='operator' keyValue='add' keySymbol='+' />
          <Key keyType='operator' keyValue='multiply' keySymbol='x' />
        </div>

        <div className='keyboard-row'>
          <Key keyType='action' keyValue='back' keySymbol='<<' />
          <Key keyType='action' keyValue='equal' keySymbol='=' />
        </div>
      </div>
    )
      {/*<div>
        <h1>React Calculator</h1>
        <div><span>1</span><span>2</span><span>3</span></div>
        <div><span>4</span><span>5</span><span>6</span></div>
        <div><span>7</span><span>8</span><span>9</span></div> 
        <div><span>=/-</span><span>0</span><span>.</span></div>
        <div><span>+</span><span>-</span><span>x</span><span>/</span></div> 
        <div><span>C</span><span>=</span></div>     
      </div>*/}
  }
};

export default Calculator;