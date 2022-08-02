import axios from 'axios';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_KEY, BASE_URL } from 'constants/constants';

const movieApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const searchMovies = async () => {
  try {
    const response = await movieApi.get('/trending/movie/day');
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
  /*  toast('Введите название!') */
};

export const infoMovie = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}/reviews`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export const getMovieCredits = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}/credits`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export const getMovieSearch = async () => {
  try {
    const response = await movieApi.get(`/movie/search`);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
