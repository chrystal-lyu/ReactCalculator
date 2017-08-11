import * as redux from 'redux';

import rootReducer from 'reducers';

export const defaultState = {
  screenRender: 'Welcome'
};

const store = redux.createStore(rootReducer, defaultState, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;