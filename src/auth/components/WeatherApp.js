import React from 'react'

import Titles from './Titles'
import Form from './Form'
import Weather from './Weather'
import Chart from './Chart'
import Weekchart from './Weekchart'
import Formtitle from './Formtitle'

const API_KEY = 'e97bfcf895700208a7299aca4aabac62'

class WeatherApp extends React.Component {
  state = {
    city: '',
    country: '',
    temperature: '',
    humidity: '',
    description: '',
    icon: '',
    list: [],
    error: ''
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    try {
      // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
      const data = await api_call.json()

      this.setState({
        city: data.city.name,
        country: data.city.country,
        temperature: data.list[0].main.temp,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        icon: 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png',
        list: data.list,
        error: ''
      })
    } catch(err) {
      this.setState({
        city: '',
        country: '',
        temperature: '',
        humidity: '',
        description: '',
        icon: '',
        list: [],
        error: 'Oops enter valid input'
      })
    }
  }
  render() {
    const weekWeather = this.state.list.map(interval=>{
      // const { temp, humidity, description, icon } = interval
      const temp = interval.main.temp
      const humidity = interval.main.humidity
      const description = interval.weather[0].description
      const icon = 'http://openweathermap.org/img/w/' + interval.weather[0].icon + '.png'
      return (
        <tr key={temp}>
          <td>
            {temp}
          </td>
          <td>
            {humidity}
          </td>
          <td>
            {description}
          </td>
          <td>
            <img src={icon} />
          </td>
        </tr>
      )
    })
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="col-xs-5 title-container">
              <Titles
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error}
              />
            </div>
            <div className="col-xs-7 form-container">
              <Form getWeather={this.getWeather}/>
              {/*<Weather
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error}
              />*/}
              <Formtitle
                city={this.state.city}
                country={this.state.country}
              />
              <table className="table" style={{fontSize:'14px'}}>
                <tbody>
                  {weekWeather}
                </tbody>
              </table>
              {/*<Chart cityData={this.state}/>*/}
              {/*<Weekchart cityData={todayWeather}/>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherApp
