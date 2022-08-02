import { Link } from 'react-router-dom';

export const ReviewsMovie = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <Link to={`reviews/${id}`}>
            <h2>{author}</h2>
            <p>{content}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
