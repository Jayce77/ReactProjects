console.log('app is running')

const userData = {
    userName: 'Andrew Mead',
    userAge: 26,
    userLocation: 'Philadelphia'
}

const appData = {
    appTitle: 'Indecision App',
    appSubTitile: 'Put you life in the hands of a computer',
    appOptions: ['List Item 1','List Item 2', 'List Item 3']
}

const getLocation = (location) => location === undefined ? 'Unknown' : location
const getOptions = (options) => options.map((item, index) => <li key={index}>{item}</li>)

const template = (
    <div>
        <h1>{appData.appTitle}</h1>
        { appData.appSubTitle && <p>{appData.appSubTitle}</p> }
        <p>{appData.appInfo}</p>
        <p>{ appData.appOptions.length > 0 ? 'Here are your options' : 'No options' }</p>
        {appData.appOptions && <ol>
            { getOptions(appData.appOptions) }
        </ol>}
    </div>
)
const templateTwo = (
    <div>
        <h1>{userData.userName ? userData.userName : 'Anonymous'}</h1>
        {userData.userAge && userData.userAge >= 18 && <p>age: {userData.userAge}</p>}
        <p>Location: {getLocation(userData.userLocation)}</p>
    </div>
)

// const template = React.createElement(
//     "h1",
//     { id: 'someId' },
//     "Something new"
// )
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)