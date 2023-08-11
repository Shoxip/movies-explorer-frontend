import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Profile.css';
import {useAuth} from "../AuthProvider/AuthProvider";
import mainApi from "../../utils/api/MainApi";

export default function Profile() {

  const [isSubmitting, setIsSubmitting] = useState(false);


  const { values, handleChange, errors, setIsValid, isValid } = useFormAndValidation();

  const { email, name } = values;

  const { logout, userData } = useAuth();

  useEffect(() => {
    if (!email && !name) {
      setIsValid(false)
    }
  }, [email, name, setIsValid])

  const handleSubmitChanges = (e) => {
      e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    if (userData.name === name && userData.email === email) {
      alert('Данные ничем не отличаются от текущих!');
      setIsSubmitting(false);
      return;
    }

    mainApi.editCurrentUserInfo({name, email}).then(() => {
      alert('Вы успешно изменили данные!')
    }).catch((err) => {
      alert('Ошибка при изменении данных.')
      console.log(err)
    }).finally(() => {
      setIsSubmitting(false);
    });
  }

  const handleExit = (e) => {
    logout();
  }

  return (
    <main>
      <section className='profile'>
        <h1 className='profile__title'>Привет, {userData.name}!</h1>
        <form className='profile__form' onSubmit={handleSubmitChanges}>
          <div className='profile__input-container'>
            <label className='profile__input-label'>Имя</label>
            <input
              type='text'
              className='profile__input'
              name='name'
              value={name || ''}
              onChange={handleChange}
              required
              minLength='2'
              maxLength='30'
              placeholder='Имя'
            />
          </div>
          <span className="input-error input-error_active">
            {errors.name}
          </span>
          <div className='profile__input-container'>
            <label className='profile__input-label'>E-mail</label>
            <input
              type='email'
              className='profile__input'
              name='email'
              value={email || ''}
              onChange={handleChange}
              required
              placeholder='Email'
            />
          </div>
          <span className="input-error input-error_active">
            {errors.email}
          </span>

          <div className='profile__buttons'>
            <button type='submit' className='link profile__button profile__button_type_edit' disabled={!isValid || isSubmitting}>{isSubmitting ? 'Отправка...' : 'Редактировать'}</button>
            <NavLink className='profile__button profile__button_type_exit' to='/' onClick={handleExit}>
              Выйти из профиля
            </NavLink>
          </div>
        </form>
      </section>
    </main>
  );
};
