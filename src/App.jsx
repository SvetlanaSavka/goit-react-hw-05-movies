import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { SharedLoyout } from 'layout/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Home/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Casts = lazy(() => import('pages/MovieDetails/Casts/Casts'));
const Reviews = lazy(() => import('pages/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<SharedLoyout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Casts />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
