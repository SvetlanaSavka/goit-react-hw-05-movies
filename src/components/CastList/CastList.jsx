import { List } from './CastList.styled';
import { base_url } from 'constants/constants';

export const CastList = ({ credits }) => {
  return (
    <List>
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
    </List>
  );
};
