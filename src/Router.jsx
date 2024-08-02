import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route from './components/Route/Route';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import ListingDetailsPage from './pages/ListingDetailsPage/ListingDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ListingFavoritesPage from './pages/ListingFavoritesPage/ListingFavoritesPage';
import SignInPage from './pages/SignInPage/SignInPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signin',
        element: (
          <Route>
            <SignInPage />
          </Route>
        ),
      },
      {
        path: '/',
        element: (
          <Route isProtected>
            <HomePage />
          </Route>
        ),
      },
      {
        path: '/listings/:listingId',
        element: (
          <Route isProtected>
            <ListingDetailsPage />
          </Route>
        ),
      },
      {
        path: '/favorites',
        element: (
          <Route isProtected>
            <ListingFavoritesPage />
          </Route>
        ),
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
