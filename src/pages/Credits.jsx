import { useState, useEffect } from 'react';
import { getMovieCredits } from 'servises/api';
import { Cast } from 'components/Cast/Cast';

export const Credits = ({ movieId }) => {
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
