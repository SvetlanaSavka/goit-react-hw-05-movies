import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { infoMovie } from 'servises/api';
import { MovieInfoDitails } from 'components/MovieInfoDitails/MovieInfoDitails';
import { MovieDitailsAction } from 'components/MovieDitailsAction/MovieDitailsAction';
import { MovieInformation } from 'components/MovieInformation/MovieInformation';
import { BackLink } from 'components/BackLink/BackLink';

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
    <>
      <BackLink backLinkHref={backLinkHref} />
      <MovieInformation movie={movie} />

      <MovieInfoDitails movie={movie} />

      <MovieDitailsAction backLinkHref={backLinkHref} movieId={movieId} />

      <Outlet />
    </>
  );
};
export default MovieDetails;
