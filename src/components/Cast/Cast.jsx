export const Cast = ({ credits }) => {
  return (
    <ul>
      {credits.map(({ id, name, profile_path }) => (
        <li key={id}>
          <h2>{name}</h2>
          <img src="" alt="" />
        </li>
      ))}
    </ul>
  );
};
