/*jshint esnext: true*/
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyC4DpZpoOrBR2ZWQqHgxMiyYwdEjegU73Y";

// Create a new component
// Should produce some HTML
class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }
  
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos: videos });
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
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