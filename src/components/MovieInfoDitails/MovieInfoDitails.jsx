export const MovieInfoDitails = ({ movie }) => {
  return (
    <ul>
      {movie.genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
