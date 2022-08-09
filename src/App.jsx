import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Movies } from 'pages/Movies';
import { SharedLoyout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Credits = lazy(() => import('pages/Credits'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SharedLoyout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};
