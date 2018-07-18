import React from 'react'

class AddOption extends React.Component {
    
    state = {
      error: undefined
    }

    handleAddOption = (e) => {
      e.preventDefault()
      
      const option = e.target.elements.option.value.trim()
      const error = this.props.handleAddOption(option)
  
      this.setState(() => ({ error }))
      if (!error) e.target.elements.option.value = ''
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
// this can be added before class
export default AddOption