import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component {
  render() {
    const { cityData } = this.props
    const { temperature, city, country, humidity, description, list, error } = cityData

    const tempData = {
      labels: [list],
      datasets: [
        {
          label: 'Temperature',
          data: [temperature],
          backgroundColor: ['rgba(255, 99, 132, 0.6)',]
        }
      ]
    }

    const humidityData = {
      labels: [city],
      datasets: [
        {
          label: 'Humidity',
          data: [humidity ],
          backgroundColor: [ 'rgba(75, 192, 192, 0.6)']
        }
      ]
    }
    return(
      <div className="chart">
        <Bar
          data={humidityData}
          options={{
            title: {
              display: true,
              text: 'Large'
            }
          }}
        />
        {/*<Bar
          data={humidityData}
          options={{
            title: {
              display: true,
              text: 'Large'
            }
          }}
        />*/}
      </div>
    )
  }
}

export default Chart
