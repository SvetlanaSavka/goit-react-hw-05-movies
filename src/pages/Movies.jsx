import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'servises/api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      const response = await searchMovies();
      console.log(response);
      setMovies(response.results);
    };
    getMovies();
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };
  const visibleMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [movies, filter]);

  return (
    <>
      <div>
        <SearchBox value={filter} onChange={changeFilter} />
      </div>
      {visibleMovies.length > 0 && (
        <ul>
          {visibleMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <h2>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
