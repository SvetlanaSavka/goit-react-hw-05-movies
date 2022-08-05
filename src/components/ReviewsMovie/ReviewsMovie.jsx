export const ReviewsMovie = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
