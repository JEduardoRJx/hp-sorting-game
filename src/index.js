import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/app/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>, 
  document.getElementById('root')
);