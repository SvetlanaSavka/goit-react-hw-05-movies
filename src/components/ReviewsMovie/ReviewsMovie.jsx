import { List } from './ReviewsMovie.styled';

export const ReviewsMovie = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </List>
  );
};
