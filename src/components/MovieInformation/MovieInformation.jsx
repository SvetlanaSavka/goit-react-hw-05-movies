export const MovieInformation = ({ movie }) => {
  const base_url = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <img
        src={`${base_url}${movie.profile_path ?? movie.poster_path}`}
        alt={movie.title}
        width="250"
      />

      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </>
  );
};
