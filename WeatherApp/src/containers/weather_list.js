import React, { Component } from 'react';

export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <tr>
          <th>City</th>
        </tr>
        <tbody></tbody>
      </table>
    );
  }
}