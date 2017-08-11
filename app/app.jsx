var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Calculator from 'Calculator';

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <Calculator/>
  </div>,
  document.getElementById('app')
);
