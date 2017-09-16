import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  applyMiddleware } from 'redux'; //createStore,

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const createStore = (reducers) => {
  let state;
  let listeners = [];
  
  const getState = () => state;
  
  const dispatch = (action) => {
    state = reducers(state, action);
    listeners.forEach(listener => listener());
  };
  
  const subscribe = (listner) => {
    listeners.push(listner);
    return () => {
      listeners = listeners.filter(l => l !== listener)
    };
  };
  
  dispatch({});

  return { getState, dispatch, subscribe };
}

const store = createStore(reducers);

const render = () => {
  document.body.innerText = store.getState().counter;
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});


//ReactDOM.render(
//  <Provider store={createStoreWithMiddleware(reducers)}>
//    <App />
//  </Provider>
//  , document.querySelector('.container'));
