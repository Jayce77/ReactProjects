class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return(
            <div>
                <input type="button" value="What should I do?" />
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <p>Options Component Here</p>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>AddOption Component Here </p>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))