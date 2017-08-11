import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Keyboard from 'Keyboard';
import Screen from 'Screen';

export class Calculator extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="calculator">
        <Screen {...this.props}/>
        <Keyboard {...this.props}/>
      </div>
    )
  }
};

const mapStatetoProps = (state) => {
  return {
    screenRender: state.screenRender
  }
};

export default connect(mapStatetoProps)(Calculator);