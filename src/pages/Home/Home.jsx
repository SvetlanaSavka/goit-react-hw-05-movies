import { useState, useEffect } from 'react';
import { searchMovies } from 'servises/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Text } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await searchMovies();

      setMovies(response.results);
    };
    getMovies();
  }, []);

  return (
    <>
      <Text>Trending today</Text>
      <MovieList movies={movies} />;
    </>
  );
};
export default Home;
