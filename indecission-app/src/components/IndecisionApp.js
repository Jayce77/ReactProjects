import React from 'react'

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
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

  handleAddOption = (option) => {
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

  handleRemoveAll = () => {
    this.setState(() => ({ options: []}))
  }

  handleRemoveSingleOption = (e) => {
    const optionToRemove = e.target.name
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }

  handlePick = () => {
    const decision = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[decision]
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
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
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}

export default IndecisionApp