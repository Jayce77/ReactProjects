console.log('app is running')

const appData = {
    appTitle: 'Indecision App',
    appSubTitile: 'Put you life in the hands of a computer',
    appOptions: ['List Item 1','List Item 2', 'List Item 3']
}

const onFormSubmit = (event) => {
    event.preventDefault()
    const option = event.target.elements.option.value
    console.log('Form Submitted', option)

    if (option) {
        appData.appOptions.push(option)
        event.target.elements.option.value = ''
        renderIndecisionApp()
    }
    
}
const clearOptions = (event) => {
    appData.appOptions = []
    renderIndecisionApp()
}

const onMakeDecision =  () => {
    const randomNum = Math.floor(Math.random() * appData.appOptions.length)
    const option = appData.appOptions[randomNum]
    alert(option)
}

const getLocation = (location) => location === undefined ? 'Unknown' : location
const getOptions = (options) => options.map((item, index) => <li key={index}>{item}</li>)

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{appData.appTitle}</h1>
            { appData.appSubTitle && <p>{appData.appSubTitle}</p> }
            <p>{appData.appInfo}</p>
            <p>{ appData.appOptions.length > 0 ? 'Here are your options' : 'No options' }</p>
            <input type='button' disabled={appData.appOptions.length === 0} value='What should I do?' onClick={onMakeDecision}/>
            <input type='button' value='Clear Options' onClick={clearOptions}/>
            {appData.appOptions && <ol>
                { getOptions(appData.appOptions) }
            </ol>}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" id=""/>
                <input type="submit" value="Add Option"/>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')
renderIndecisionApp()