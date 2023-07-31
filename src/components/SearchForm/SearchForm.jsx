import {useEffect, useState} from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import glass from '../../images/glass.svg';
import './SearchForm.css';

export default function SearchForm({ moviesStateAction }) {

  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();

  const [shortFilter, setShortFilter] = useState();

  const { film } = values;

  const { movies, setFilteredMovies } = moviesStateAction;

  useEffect(() => {
    if (!film) {
      setIsValid(false)
      setFilteredMovies(movies);
      return;

    }
    const filtered = movies.filter((movie) => {
      const isTitleMatch = movie.title.toLowerCase().includes(film.toLowerCase());
      const isShortMatch = !shortFilter || movie.short === shortFilter;

      return isTitleMatch && isShortMatch;
    });

    setFilteredMovies(filtered);

  }, [film, shortFilter, movies, setFilteredMovies, setIsValid])

  return (
    <section className='search-section'>
      <form className='search-form'>
        <div className='search-form__container'>
          <input
            type='text'
            className='search-form__input'
            name='film'
            value={film || ''}
            onChange={handleChange}
            placeholder='Фильм'
            required
          />
          <button type='button' className={!isValid ? 'button search-form__button search-form__button_type_disabled' : 'button search-form__button'}>
            <img className='search-form__glass-image' src={glass} alt='лупа' />
          </button>
        </div>
        <span className={isValid ? 'search-form__input-error' : 'search-form__input-error search-form__input-error_active'}>
          {errors.film}
        </span>

        <FilterCheckbox shortFilter={shortFilter} setShortFilter={setShortFilter} />
      </form>

    </section>
  );
};
