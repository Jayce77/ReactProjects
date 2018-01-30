class IndecisionApp extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handlePick = this.handlePick.bind(this)

    this.state = {
      options: props.options,
      newOption: ""
    }
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > 1) {
      return 'This options already exists'
    }

    this.setState((prevState) => {
      const prevOptions = prevState.options
      return {options: prevOptions.concat(option), newOption: ""}
    })
  }

  handleRemoveAll() {
    this.setState(() => {
      return { options: []}
    })
  }

  handlePick() {
    const decision = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[decision])
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.lenth > 0 ? false : true}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}/>
        <AddOption 
          handleAddOption={this.handleAddOption} 
          newOption={this.state.newOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
 options: []
}

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <input 
//           type="button" 
//           onClick={this.props.handlePick} 
//           value="What should I do?" 
//           disabled={!this.props.hasOptions}
//         />
//       </div>
//     )
//   }
// }

// class Options extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <input type="button" onClick={this.props.handleRemoveAll} value="Remove All" />
//         {this.props.options.map((item, index) => <Option key={index} text={item}/>)}
//       </div>
//     )
//   }
// }

// class Option extends React.Component {
//   render() {
//     return (
//       <div>{this.props.text}</div>
//     )
//   }
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      { props.subtitle && <h2>{props.subtitle}</h2> }
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <input
        type="button"
        onClick={props.handlePick}
        value="What should I do?"
        disabled={!props.hasOptions}
      />
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <input type="button" onClick={props.handleRemoveAll} value="Remove All" />
      {props.options.map((item, index) => <Option key={index} text={item} />)}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>{props.text}</div>
  )
}

class AddOption extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: ""
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => {
      return { error }
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input 
            type="text" 
            name="option" 
          />
          <input type="submit" value="Add Option" />
        </form>
      </div>
    )
  }
}

// const User = () => {
//   return(
//     <div>
//       <p>Name: </p>
//       <p>Age: </p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'))