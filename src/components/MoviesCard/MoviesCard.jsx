import { useLocation } from 'react-router-dom';
import Movie from '../../images/movies-card__image.png';
import './MoviesCard.css';

export default function MoviesCard({ card }) {

  const location = useLocation();

  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{card.title}</h2>
        <p className='movies-card__duration'>1ч 17м</p>
        <button type='button' className={location.pathname === '/saved-movies' ? 'movies-card__delete' : 'button movies-card__like'} />
      </div>
      <img src={Movie} alt={`Название фильма ${card.title}`} className='movies-card__image' />
      
      
    </li>
  )
};
