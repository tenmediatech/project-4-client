import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component {
  // state = {
  //   chartData: {
  //     labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  //     datasets: [
  //       {
  //         label: 'Population',
  //         data:[
  //           617594,
  //           181045,
  //           153060,
  //           106519,
  //           105162,
  //           95072
  //         ],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.6)',
  //           'rgba(54, 162, 235, 0.6)',
  //           'rgba(255, 206, 86, 0.6)',
  //           'rgba(75, 192, 192, 0.6)',
  //           'rgba(153, 102, 255, 0.6)',
  //           'rgba(255, 159, 64, 0.6)',
  //           'rgba(255, 99, 132, 0.6)'
  //         ]
  //       }
  //     ]
  //   }
  // }
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
        <Line
          data={tempData}
          options={{
            title: {
              display: true,
              text: 'Large'
            }
          }}
        />
        <Bar
          data={humidityData}
          options={{
            title: {
              display: true,
              text: 'Large'
            }
          }}
        />
      </div>
    )
  }
}

export default Chart
