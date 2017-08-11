import React from 'react';

export class Key extends React.Component {
  _handleClick() {
    console.log('clicked')
  }

  render() {
    let classString = "key key-" + this.props.keyType;
    let classOperation = "";
    if(this.props.keyType === "operator") {
      classOperation = "operator " + this.props.keyValue;
    } else if (this.props.keyType === "action") {
      classOperation = "action " + this.props.keyValue;
    }
    return (
      <div className={classString} onClick={this._handleClick.bind(this)}>
        <div className={classOperation}>
          {this.props.keySymbol}
        </div>
      </div>
    )
  }
};

export default Key;