class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.state = { visibility: false }
        this.handleToggleVisibility = this.handleToggelVisibility.bind(this)
    }

    handleToggelVisibility() {
        this.setState((prevState) => { 
            return {

                visibility: !prevState.visibility
            } 
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                { this.state.visibility 
                    ? <input type="button" value="Show Details" onClick={this.handleToggleVisibility}/>
                    : <input type="button" value="Hide Detials" onClick={this.handleToggleVisibility}/> }
                {this.state.visibility && <p>Hey. These are some detials you can now see!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let hide = true
// const toggle = () => {
//     hide ? hide = false : hide = true
//     renderVisibilityToggle()
// }
// const renderVisibilityToggle = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             {hide ? <input type="button" value="Show Details" onClick={toggle}/>
//              : <input type="button" value="Hide Detials" onClick={toggle}/>}
//             {!hide && <p>Hey. These are some detials you can now see!</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// const appRoot = document.getElementById('app')
// renderVisibilityToggle()