import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Calculator from 'Calculator';
import store, {defaultState} from './store/configStore';

require('style!css!sass!applicationStyles')

store.subscribe(() => {
  var state = store.getState();
  console.log('New State => ', state);
});

ReactDOM.render(
  <Provider store={store}>
    <Calculator/>
  </Provider>,
  document.getElementById('app')
);
