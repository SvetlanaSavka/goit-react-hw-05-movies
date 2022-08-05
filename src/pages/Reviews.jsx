import { useState, useEffect } from 'react';
import { getMovieReviews } from 'servises/api';
import { ReviewsMovie } from 'components/ReviewsMovie/ReviewsMovie';
import { useLocation } from 'react-router-dom';

export const Reviews = () => {
  const location = useLocation();
  const movieId = Number(location.state.id);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await getMovieReviews(movieId);
      setReviews(response.data.results);
    };
    getReviews();
  }, [movieId]);
  // console.log(reviews);
  console.log('reviews');
  return (
    <>
      <ReviewsMovie reviews={reviews} />
    </>
  );
};
