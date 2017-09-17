import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onCLick={this.props.onIncrement}>+</button>
        <button onCLick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}
