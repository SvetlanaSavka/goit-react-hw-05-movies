import { Link, useLocation } from 'react-router-dom';
import { List } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <h2>{title}</h2>
          </Link>
        </li>
      ))}
    </List>
  );
};
