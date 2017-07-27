import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyC4DpZpoOrBR2ZWQqHgxMiyYwdEjegU73Y";


// Create a new component
// Should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}



// Take component's generated HTML and 
// put it in the DOM
// Make an instance by wrapping in jsx tags
// Give ReactDOM a second argument to tell it
// where to render the html
ReactDOM.render(<App />, document.querySelector('.container'));
