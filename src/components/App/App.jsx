import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import {useState} from "react";
import Routing from "../../Routing";



export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <div className='App'>
      <Header
        isLoggedIn={isLoggedIn}
      />

      <Routing />

      <Footer />
    </div>
  );
};
