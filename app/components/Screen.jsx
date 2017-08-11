import React from 'react';

export class Screen extends React.Component {
  render() {
    const {screenRender} = this.props;
    return (
      <div className="screen">
        {screenRender}
      </div>
    )
  }
};

export default Screen;