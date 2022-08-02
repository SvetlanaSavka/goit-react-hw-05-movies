import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
//import { ToastContainer } from 'react-toastify';
import Home from 'pages/Home/Home';
//import Movies from 'pages/Movies';
//import MovieDetails from 'pages/MovieDetails';

import { SharedLoyout } from 'components/SharedLayout/SharedLayout';

const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLoyout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
      </Route>
    </Routes>
  );
};
