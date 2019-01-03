import axios from 'axios';

const FILM_BASE_URL = 'https://ghibliapi.herokuapp.com/films';

export const getFilms = async () => {
  const { data } = await axios.get(`${FILM_BASE_URL}`);
  return data;
};

export const getFilm = async FILM_ID => {
  const { data } = await axios.get(`${FILM_BASE_URL}/${FILM_ID}`);
  return data;
};
