import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from 'Calculator';

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <Calculator/>
  </div>,
  document.getElementById('app')
);
