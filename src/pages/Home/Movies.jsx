import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'servises/api';
import { MovieList } from 'components/MovieList/MovieList';

//getMovieSearch('cats').then(console.log);

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filterParam === '') {
      return;
    }
    const getMovies = async () => {
      const response = await getMovieSearch(filterParam);

      setMovies(response.data.results);
    };
    getMovies();
  }, [filterParam]);

  const handleSubmit = search => {
    setSearchParams(search !== '' ? { filter: search } : {});
  };

  return (
    <>
      <SearchBox value={filterParam} onSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
