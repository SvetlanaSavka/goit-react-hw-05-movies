import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { movieApi } from 'constants/constants';

export const searchMovies = async () => {
  try {
    const response = await movieApi.get('/trending/movie/day');

    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const infoMovie = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}`);

    return response;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}/reviews`);

    return response;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}/credits`);

    return response;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieSearch = async query => {
  try {
    const response = await movieApi.get(`/search/movie`, {
      params: {
        query,
      },
    });

    return response;
  } catch (error) {
    toast.error(error.message);
  }
};
