console.log('app is running')

const template =<h1>This is new JSX from app.js!</h1>
// const template = React.createElement(
//     "h1",
//     { id: 'someId' },
//     "Something new"
// )
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)