import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

render((
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
  </Provider>
), document.getElementById('root'));
