import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieSearch } from 'servises/api';
//import { Link } from 'react-router-dom';
//import { WiDirectionLeft } from 'react-icons/wi';

export const MovieSearchList = () => {
  const { movieId } = useParams(); //возвращает объект всех  параметров
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getSearchMovieInfo = async () => {
      const response = await getMovieSearch();
      setMovie(response);
    };
    getSearchMovieInfo();
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <main>
      <div>
        {/* <WiDirectionLeft width="20" height="20" fill="grey" />
        <Link to={backLinkHref}>Back to movies</Link>
        <img src="" alt={movie.title} width="250" /> */}
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
      <h2>Additional information</h2>
      {/*  <Link
        to="cast"
        state={{
          from: backLinkHref,
          id: movieId,
          a: 5,
        }}
      >
        Go to cast
      </Link>

      <Link
        to="reviews"
        state={{
          from: backLinkHref,
          id: movieId,
        }}
      >
        Go to reviews
      </Link>

      <Outlet /> */}
    </main>
  );
};

/* useEffect(() => {
  const getMovies = async () => {
    const response = await searchMovies();

    setMovies(response.results);
  };
  getMovies();
}, []); */
