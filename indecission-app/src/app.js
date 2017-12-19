class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    const options = ['Thing one', 'Thing two', 'Thing four']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick')
  }
  render() {
    return (
      <div>
        <input type="button" onClick={this.handlePick} value="What should I do?" />
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleRemoveAll() {
    alert('Clicked Remove All')
  }

  render() {
    return (
      <div>
        <input type="button" onClick={this.handleRemoveAll} value="Remove All" />
        {this.props.options.map((item, index) => <Option key={index} text={item}/>)}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}

class AddOption extends React.Component {

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if(option) alert('Option Added: ', option)
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <input type="submit" value="Add Option" />
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))