import { useState, useEffect } from 'react';
import { getMovieReviews } from 'servises/api';
import { ReviewsMovie } from 'components/ReviewsMovie/ReviewsMovie';
import { useLocation } from 'react-router-dom';

const Reviews = () => {
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

  return <ReviewsMovie reviews={reviews} />;
};

export default Reviews;
