let hide = true
const toggle = () => {
    hide ? hide = false : hide = true
    renderVisibilityToggle()
}
const renderVisibilityToggle = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            {hide ? <input type="button" value="Show Details" onClick={toggle}/>
             : <input type="button" value="Hide Detials" onClick={toggle}/>}
            {!hide && <p>Hey. These are some detials you can now see!</p>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')
renderVisibilityToggle()