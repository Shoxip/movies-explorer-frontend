import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Popup from '../Popup/Popup';
import './Header.css';
import {useLocation} from "react-router-dom";

export default function Header() {


  const [isOpen, setIsOpen] = useState(false);

  function handlePopupClick() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        closePopup()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', close)
    }
    return () => {
      document.removeEventListener('keydown', close)
    }
  }, [isOpen])

  const path = useLocation().pathname;

  if((path === '/sign-up') || (path === '/sign-in')) {
    return
  }

  return (
    <>
      <header className='header'>
        <Logo />
        <Navigation onClose={handlePopupClick} />
      </header>
      <Popup isOpen={isOpen} onClose={closePopup} />
    </>
  );
};
