import React from 'react';
import {createStore} from 'redux';
import storeReducer from './reducers/index';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

let storeTodos = {
  todos: [
{id:0, 
  todo:'Fare la spesa', 
  completed: false},
{id:1, 
  todo:'Fare i compiti', 
  completed: false},
{id:2, todo:'Comprare il balsamo', completed: false}
  ]
};

const store = createStore(storeReducer, {todos: [...storeTodos.todos] } );

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
