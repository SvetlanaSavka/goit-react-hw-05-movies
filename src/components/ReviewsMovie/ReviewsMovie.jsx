import { Title } from './ReviewsMovie.styled';

export const ReviewsMovie = ({ reviews }) => {
  return (
    <Title>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </Title>
  );
};
