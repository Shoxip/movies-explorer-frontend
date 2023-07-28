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
import ProtectedView from "../ProtectedView/ProtectedView";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  console.log(isLoggedIn)

  return (
    <>
    <div className='page'>

      <Header isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          element={
            <ProtectedView isLoggedIn={isLoggedIn}>
              <Movies />
            </ProtectedView>
        }
        />
        <Route path='/saved-movies' element={
          <ProtectedView isLoggedIn={isLoggedIn}>
            <SavedMovies />
          </ProtectedView>
        } />
        <Route path='/profile' element={
          <ProtectedView isLoggedIn={isLoggedIn}>
            <Profile setIsLoggedIn={setIsLoggedIn} />
          </ProtectedView>
        } />
        <Route path='/signin' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
    <Footer />
    </>
  );
};
