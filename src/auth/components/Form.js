import React from 'react'

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country..."/>

    <select className="styled-select">
      <option value="today">Today</option>
      <option value="tomorrow">Tommorrow</option>
      <option selected value="week">Week</option>
    </select>

    <button>Get Weather</button>
  </form>
)

export default Form
