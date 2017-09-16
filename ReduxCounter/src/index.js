import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

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
