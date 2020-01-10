import React from "react";
import ReactDOM from "react-dom";
import App from 'App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'

import "assets/scss/material-kit-react.scss?v=1.8.0";

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
