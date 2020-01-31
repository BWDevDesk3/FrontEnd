// React
import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
// App Component
import App from './components/App';
// Services
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
// Root Reducer
import {rootReducer} from './reducers/reducers';
// Store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>,
    document.getElementById("root")
  );

serviceWorker.unregister();