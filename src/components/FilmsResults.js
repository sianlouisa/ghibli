import React, { Component } from 'react';
import * as api from './api';

class FilmsResults extends Component {
  state = { film: [] };
  render() {
    const { film } = this.state;
    return <h1>{film.title}</h1>;
  }

  componentDidMount() {
    api.getFilm(this.props.id).then(film => {
      this.setState({
        film,
      });
    });
  }
}

export default FilmsResults;
