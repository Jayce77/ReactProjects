console.log('app is running')

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

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)