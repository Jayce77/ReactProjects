'use strict';

console.log('app is running');

var template = React.createElement(
  'h1',
  null,
  'This is new JSX from app.js!'
);
// const template = React.createElement(
//     "h1",
//     { id: 'someId' },
//     "Something new"
// )
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
