import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import {useState} from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='page'>

      <Header isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          element={<Movies />}
        />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};
