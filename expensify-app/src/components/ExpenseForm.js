import React from 'react'

export default class ExpenseForm extends React.Component {

  state = {
    descripton: '',
    note: '',
    amount: ''
  }

  onDescriptionChange = (e) => {
    const descripton = e.target.value
    this.setState(() => ({ descripton }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({note}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
  if(amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}))
    }
  }

  render() {
    return (
      <div>
      <form action="">
        <input 
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.descripton}
          onChange={this.onDescriptionChange}
        />
        <input 
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        {/*<input type="text" />*/}
        <textarea 
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <button>Add Expense</button>
      </form>
      </div>
    )
  }
}