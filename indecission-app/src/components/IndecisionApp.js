import React from 'react'
import ReactDOM from 'react-dom'

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleRemoveSingleOption = this.handleRemoveSingleOption.bind(this)
    this.handlePick = this.handlePick.bind(this)

    this.state = {
      options: [],
      newOption: ""
    }
  }

  componentDidMount() {
    try { 
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if(options) this.setState(() => ({ options }))
    } catch(e) {
      console.log(e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  comonentWillUnmount() {
    console.log('Unmounted')
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
    this.setState(() => ({ options: []}))
  }

  handleRemoveSingleOption(e) {
    const optionToRemove = e.target.name
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
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
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveSingleOption={this.handleRemoveSingleOption} />
        <AddOption 
          handleAddOption={this.handleAddOption} 
          newOption={this.state.newOption}
        />
      </div>
    )
  }
}

export default IndecisionApp