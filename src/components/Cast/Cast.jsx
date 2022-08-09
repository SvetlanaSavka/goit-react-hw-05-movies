import { Title } from './Cast.styled';

export const Cast = ({ credits }) => {
  const base_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <Title>
      {credits.slice(0, 7).map(({ id, name, profile_path }) => (
        <li key={id}>
          <h2>{name}</h2>
          <img
            src={
              profile_path
                ? `${base_url}${profile_path}`
                : 'https://avatars.githubusercontent.com/u'
            }
            alt={name}
            width="250"
          />
        </li>
      ))}
    </Title>
  );
};
