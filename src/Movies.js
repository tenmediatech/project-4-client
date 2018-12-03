import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Movies extends React.Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:4741/movies')
    this.setState({movies: response.data.movies})
  }

  render() {
    let movieRows
    const { movies } = this.state
    if (movies.length === 0) {
      movieRows = <tr><td>Loading</td></tr>
    } else {
      movieRows = movies.map(movie=>{
        const { id, title } = movie
        return (
          <tr key={id}>
            <td>
              <Link to={`/movies/${id}`}>{title}</Link>
            </td>
          </tr>
        )
      })
    }

    return (
      <React.Fragment>
        <Link to='/'>Home</Link>
        <h1>Movies</h1>
        <Link to={'/movies/new'}>Add Movie</Link>
        <table>
          <tbody>
            {movieRows}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Movies
