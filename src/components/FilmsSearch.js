import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from './api';

class FilmsSearch extends Component {
  state = {
    films: [],
    selectedFilm: [],
  };
  render() {
    const { films, selectedFilm } = this.state;
    return (
      <form onChange={this.foundFilm}>
        <select name="films">
          <option value="">Select a film</option>
          {films.map((film, i) => (
            <option key={i} value={film.title}>
              {film.title}
            </option>
          ))}
        </select>
        {selectedFilm.length === 1 ? (
          <Link to={`/films/${selectedFilm[0].id}`}>
            <button>Select</button>
          </Link>
        ) : (
          <button>Select</button>
        )}
      </form>
    );
  }

  componentDidMount() {
    api.getFilms().then(films => {
      this.setState({
        films,
      });
    });
  }

  foundFilm = event => {
    event.preventDefault();
    const selectedFilm = this.state.films.filter(
      film => film.title === event.target.value,
    );
    console.log(selectedFilm[0].id);
    this.setState({
      selectedFilm,
    });
  };
}

export default FilmsSearch;
