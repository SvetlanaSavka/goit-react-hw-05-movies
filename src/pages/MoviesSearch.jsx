/* import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieSearch } from 'servises/api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      const response = await getMovieSearch();
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
export default Movies; */

//movies/id/cast/details

// movies state={{from: location}}
// movies/id state={{from: location.state.from}}
// movies/id/cast state={{from: location.state.from}}
// location = {..., state: {
// from: "movies", id: 15, a: 5
//}}
