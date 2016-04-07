import React, { Component } from 'react';
import {connect} from 'react-redux';
import Graphs from '../components/graphs';
import GoogleMaps from '../components/google_map'


 class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    const temps = cityData.list.map(entry => entry.main.temp);
    const pressure = cityData.list.map(entry => entry.main.pressure);
    const humidity = cityData.list.map(entry => entry.main.humidity);

    console.log(temps);
      return(
         <tr key={name}>
          <td>
            <GoogleMaps lon={lon} lat={lat} />
          </td>
          <td>
            <Graphs height={120} width={180} data={temps} color="red" units="K"></Graphs>

          </td>
          <td>
              <Graphs height={120} width={180} data={pressure} color="blue" units="hPa"></Graphs>
          </td>
          <td>
              <Graphs height={120} width={180} data={humidity} color="green" units="%"></Graphs>
          </td>

         </tr>
      )
  }

  render(){
    // our redux state structure is weather:[city, city, city]. Hence for weather list body,
    //we need to iterate over each city of the weather array. The weather.map(this.renderWeather) is calling
    // renderWeather function for each element in the array.

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
         {this.props.weather.map(this.renderWeather)}

        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  //const weather = state.weather;
  return {weather};  // this is same as state.weather . This can also be written as {weather} ==== {weather:weather}
}

export default connect (mapStateToProps) (WeatherList);
