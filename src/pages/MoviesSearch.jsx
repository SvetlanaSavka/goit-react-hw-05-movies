/* import { useState, useEffect } from 'react';
import { getMovieSearch } from 'servises/api';
import { MovieSearchList } from 'components/MovieSearchList';

export const MoviesSearch = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const response = await getMovieSearch();
      setMovies(response);
    };
    getMovies();
  }, []);

  return (
    <>
      <MovieSearchList movies={movies} />
    </>
  );
}; */
