import React from "react";

import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.page";
import MoviesPage from "./pages/movies/Movies.page";
import SavedMoviesPage from "./pages/movies/SavedMovies.page";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/Signup.page";
import NotFoundPage from "./pages/Notfound.page";
import ProfilePage from "./pages/Profile.page";
import ProtectedView from "./components/ProtectedView/ProtectedView";



const RoutesList = [
  {path: '/', pageComponent: <IndexPage />, isAuthNeeded: false},

  {path: '/profile', pageComponent: <ProfilePage />, isAuthNeeded: true},

  // Auth
  {path: '/sign-in', pageComponent: <SignInPage />, isAuthNeeded: true},
  {path: '/sign-up', pageComponent: <SignUpPage />, isAuthNeeded: true},

  // Movies
  {path: '/movies', pageComponent: <MoviesPage />, isAuthNeeded: false},
  {path: '/movies/saved', pageComponent: <SavedMoviesPage />, isAuthNeeded: false},

  {path: '*', pageComponent: <NotFoundPage />, isAuthNeeded: false},
]



export default function Routing() {
  return (
    <>
      <Routes>
        {
          RoutesList.map(i => (
              <Route
                key={i.path}
                path={i.path}
                element={i.pageComponent}
              />
          ))
        }
      </Routes>
    </>
  )
}
