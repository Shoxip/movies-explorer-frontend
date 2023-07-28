import React from "react";

import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.page";
import MoviesPage from "./pages/movies/Movies.page";
import SavedMoviesPage from "./pages/movies/SavedMovies.page";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/Signup.page";
import NotFoundPage from "./pages/Notfound.page";
import ProfilePage from "./pages/Profile.page";



const RoutesList = [
  {path: '/', pageComponent: <IndexPage />, isAuth: false},

  {path: '/profile', pageComponent: <ProfilePage />, isAuth: false},

  // Auth
  {path: '/sign-in', pageComponent: <SignInPage />, isAuth: false},
  {path: '/sign-up', pageComponent: <SignUpPage />, isAuth: false},

  // Movies
  {path: '/movies', pageComponent: <MoviesPage />, isAuth: false},
  {path: '/movies/saved', pageComponent: <SavedMoviesPage />, isAuth: false},

  {path: '*', pageComponent: <NotFoundPage />, isAuth: false},
]



export default function Routing() {
  return (
    <>
      <Routes>
        {
          RoutesList.map(i => (
            <Route
              path={i.path}
              element={i.pageComponent}
            />
          ))
        }
      </Routes>
    </>
  )
}