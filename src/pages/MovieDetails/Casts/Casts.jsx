import { useState, useEffect } from 'react';
import { getMovieCredits } from 'servises/api';
import { CastList } from 'components/CastList/CastList';
import { useLocation } from 'react-router-dom';

const Casts = () => {
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
      <CastList credits={credits} />
    </>
  );
};
export default Casts;
