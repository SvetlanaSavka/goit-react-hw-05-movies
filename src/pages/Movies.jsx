import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'servises/api';
import { MovieList } from 'components/MovieList/MovieList';

getMovieSearch('cats').then(console.log);

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  console.log(filterParam);

  useEffect(() => {
    if (filterParam === '') {
      return;
    }
    const getMovies = async () => {
      const response = await getMovieSearch(filterParam);
      console.log(response);

      setMovies(response.data.results);
    };
    getMovies();
  }, [filterParam]);

  const handleSubmit = search => {
    setSearchParams(search !== '' ? { filter: search } : {});
  };
  /* const handleSubmit = search => {
  setPage(1);
  setSearch(search);
  setPictures([]);
}; */

  return (
    <>
      <div>
        <SearchBox value={filterParam} onSubmit={handleSubmit} />
      </div>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};
