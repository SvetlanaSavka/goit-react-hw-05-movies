import { useParams, Link, useLocation } from 'react-router-dom';
import { WiDirectionLeft } from 'react-icons/wi';
import { useState, useEffect } from 'react';
import { infoMovie } from 'servises/api';
import { Reviews } from 'pages/Reviews';
import { Credits } from 'pages/Credits';
import { MovieInfoDitails } from 'components/MovieInfoDitails/MovieInfoDitails';
import { Container } from './MovieDetails.styled';

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
  return (
    <Container>
      <div>
        <WiDirectionLeft width="20" height="20" fill="grey" />
        <Link to={backLinkHref}>Back to movies</Link>
        <img src="" alt={movie.title} width="250" />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <MovieInfoDitails movie={movie} />
      </div>
      <h2>Additional information</h2>
      <Credits movieId={movieId} />
      <Reviews movieId={movieId} />
    </Container>
  );
};
export default MovieDetails;
