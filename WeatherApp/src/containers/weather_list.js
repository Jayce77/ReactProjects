import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const NAME = cityData.city.name;
    const TEMPS = cityData.list.map(weather => weather.main.temp);
    const PRESSURES = cityData.list.map(weather => weather.main.pressure);
    const HUMIDITIES = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      
      <tr key={NAME}>
        <td>
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        <td><Chart data={TEMPS} color="orange" units="K"/></td>
        <td><Chart data={PRESSURES} color="green" units="hPa"/></td>
        <td><Chart data={HUMIDITIES} color="black" units="%"/></td>
      </tr>
    );
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (HPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);