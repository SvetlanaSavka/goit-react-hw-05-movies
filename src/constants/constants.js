import axios from 'axios';

export const API_KEY = '18a83c57cdad2caf2727c80f23ceed6b';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const movieApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
