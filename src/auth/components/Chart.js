import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component {
  render() {
    const { temp } = this.props
    console.log(temp)
    const tempData = {
      labels: temp,
      datasets: [
        {
          label: 'Day Temperature',
          data: temp,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        }
      ]
    }
    return(
      <div className="chart-container">
        <div className="chart" >
          <Bar
            data={tempData}
            options={{
              responsive: true,
              tooltips: {
                mode: 'label',
              },
              hover: {
                mode: 'nearest',
                intersect: true
              },
              scales: {
                xAxes: [{
                  display: true,
                  gridLines: {
                    display: false
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Day'
                  }
                }],
                yAxes: [{
                  display: true,
                  gridLines: {
                    display: false
                  },
                  scaleLabel: {
                    display: true,
                    labelString: '°C'
                  }
                }]
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default Chart
