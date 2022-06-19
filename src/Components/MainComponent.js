import React, { Component } from 'react';
import Header from './HeaderComponent';
import WeatherBox from './WeatherComponent';
import Daily from './DailyWeatherComponent';
import Hourly from './HourlyWeatherComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Main extends Component {


  constructor(props) {
    super(props);

    this.state = {
      apikey: 'b6e0a7f6a6915a619180b1e40d948e9f',
      lat: null,
      lon: null,
      searchCity: '',
      city: '',
      dt: null,
      timezone: null,
      sunrise: null,
      sunset: null,
      temp: null,
      rain: null,
      humidity: null,
      weather: '',
      windSpeed: null,
      isLoaded: false,
      open: false
    };

  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition((position) => {

      this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }, this.fetchWeatherData)
    });

  }

  fetchWeatherData = () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.state.apikey}&units=metric`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({
          isLoaded: !this.state.isLoaded,
          city: res.name,
          dt: res.dt,
          timezone: res.timezone,
          sunrise: res.sys.sunrise,
          sunset: res.sys.sunset,
          temp: res.main.temp,
          humidity: res.main.humidity,
          weather: res.weather[0].main,
          windSpeed: res.wind.speed,

        });
      }
      )

  }

  handleChange = (evt) => {

    this.setState({
      searchCity: evt.target.value
    });
  }

  handleClick = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&appid=${this.state.apikey}&units=metric`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({
          lat: res.coord.lat,
          lon: res.coord.lon,
          city: res.name,
          dt: res.dt,
          timezone: res.timezone,
          sunrise: res.sys.sunrise,
          sunset: res.sys.sunset,
          temp: res.main.temp,
          humidity: res.main.humidity,
          weather: res.weather[0].main,
          windSpeed: res.wind.speed,

        })
      })
  }


  render() {



    return (
      <div className='body'>

        <Header>

          <div className="name">Weather Channel</div>
          <div className="searchbox">
            <input type="text" placeholder="Search Location..." value={this.state.searchCity} onChange={this.handleChange} className="inputtext" />

            <button className="btn" onClick={this.handleClick}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>

        </Header>

        {this.state.isLoaded ? <WeatherBox city={this.state.city} date={this.state.dt} timezone={this.state.timezone} sunrise={this.state.sunrise} sunset={this.state.sunset} temp={this.state.temp} weather={this.state.weather}
          humidity={this.state.humidity} windSpeed={this.state.windSpeed} /> : (<div style={{ color: "white", fontSize: "x-large", textAlign: "center", marginTop: "5%" }}>Loading...</div>)}


        {this.state.isLoaded ? (
          <Routes>
            <Route path='/daily' element={<Daily lat={this.state.lat} lon={this.state.lon} apikey={this.state.apikey} />} />
            <Route path='/hourly' element={<Hourly lat={this.state.lat} lon={this.state.lon} apikey={this.state.apikey} />} />
            <Route path='/' element={<Navigate replace to='/daily' />} />
          </Routes>) : ('')}

      </div>

    );


  };
}

export default Main;