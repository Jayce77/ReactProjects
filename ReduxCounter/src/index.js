import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStore(reducers);

console.log(store);


const render = () => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App 
        value={store.getState().counter}
        onIncrement={() => 
                    store.counter.dispatch({
                     type: 'INCREMENT'
                    })
        }
        onDecrement={() => 
                    store.dispatch({
                     type: 'DECREMENT'
                    })
        }
      />
    </Provider>
    , document.querySelector('.container'));
};

store.subscribe(render);
render();