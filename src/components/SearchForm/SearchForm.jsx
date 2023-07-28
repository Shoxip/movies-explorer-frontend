import { useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import glass from '../../images/glass.svg';

export default function SearchForm() {

  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();

  const { film } = values;

  useEffect(() => {
    if (!film) {
      setIsValid(false)
    }
  }, [film])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section>
      <form className='search__form'>
        <div className='search__container'>
          <input
            type='text'
            className='search__input'
            name='film'
            value={film || ''}
            onChange={handleChange}
            placeholder='Фильм'
          />
          <button type='button' className={!isValid ? 'search__button_type_disabled' : 'button search__button'}>
           <img className='glass__image' src={glass} alt='лупа' />
          </button>
        </div>
        <span className={isValid ? 'input-error' : 'input-error input-error_active'}>
          {errors.film}
        </span>
        <FilterCheckbox />
      </form>
    </section>
  );
};
