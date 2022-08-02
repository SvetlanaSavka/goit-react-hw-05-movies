import { useState, useEffect } from 'react';
import { getMovieReviews } from 'servises/api';
import { ReviewsMovie } from 'components/ReviewsMovie/ReviewsMovie';

export const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await getMovieReviews(movieId);
      setReviews(response.data.results);
    };
    getReviews();
  }, [movieId]);
  console.log(reviews);
  return (
    <>
      <ReviewsMovie reviews={reviews} />
    </>
  );
};
