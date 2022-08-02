import { Link } from 'react-router-dom';

export const Cast = ({ credits }) => {
  return (
    <ul>
      {credits.map(({ id, name }) => (
        <li key={id}>
          <Link to={`cast/${id}`}>
            <h2>{name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
