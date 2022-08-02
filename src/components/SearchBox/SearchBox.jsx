import { Container } from 'components/SearchBox/SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="button">Search</button>
    </Container>
  );
};
