import { useState, useEffect } from 'react';
import { getMovieCredits } from 'servises/api';
import { Cast } from 'components/Cast/Cast';
import { useLocation } from 'react-router-dom';

export const Credits = () => {
  const location = useLocation();
  const movieId = Number(location.state.id);
  console.log(location);

  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await getMovieCredits(movieId);
      setCredits(response.data.cast);
    };
    getCredits();
  }, [movieId]);

  return (
    <>
      <Cast credits={credits} />
    </>
  );
};
