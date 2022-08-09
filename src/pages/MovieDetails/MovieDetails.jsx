import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { infoMovie } from 'servises/api';
import { MovieInfoDitails } from 'components/MovieInfoDitails/MovieInfoDitails';
import { Container, LinkStyled } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getMovieDitails = async () => {
      const response = await infoMovie(movieId);
      setMovie(response.data);
    };
    getMovieDitails();
  }, [movieId]);

  if (!movie) {
    return;
  }
  const backLinkHref = location.state?.from ?? '/movies';

  const base_url = 'https://image.tmdb.org/t/p/w500';

  console.log(movie);

  return (
    <Container>
      <div>
        <LinkStyled to={backLinkHref}>Back to movies</LinkStyled>

        <img
          src={`${base_url}${movie.profile_path ?? movie.poster_path}`}
          alt={movie.title}
          width="250"
        />

        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <MovieInfoDitails movie={movie} />
      </div>
      <h2>Additional information</h2>
      <LinkStyled
        to="cast"
        state={{
          from: backLinkHref,
          id: movieId,
        }}
      >
        Go to cast
      </LinkStyled>

      <LinkStyled
        to="reviews"
        state={{
          from: backLinkHref,
          id: movieId,
        }}
      >
        Go to reviews
      </LinkStyled>

      <Outlet />
    </Container>
  );
};
export default MovieDetails;
