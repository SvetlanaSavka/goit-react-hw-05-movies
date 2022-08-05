import { Link } from 'react-router-dom';

export const MovieSearchList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            <h2>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
