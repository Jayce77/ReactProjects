import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyC4DpZpoOrBR2ZWQqHgxMiyYwdEjegU73Y";



// Create a new component
// Should produce some HTML
class App extends Component {
  constructor(props){
    super(props)
    
    this.state = { videos: [] };
    
    YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
      console.log(data);
    });

  }
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}



// Take component's generated HTML and 
// put it in the DOM
// Make an instance by wrapping in jsx tags
// Give ReactDOM a second argument to tell it
// where to render the html
ReactDOM.render(<App />, document.querySelector('.container'));