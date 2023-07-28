import './AboutMe.css';
import photo from '../../images/photo.png';

export default function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>
        Студент
      </h2>
      <div className='about-me__info'>
        <div className='about-me__info-text'>
          <h3 className='about-me__name'>
            Анна
          </h3>
          <p className='about-me__job'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='about-me__description'>
          Я родилась и живу в Санкт-Петербурге, закончила факультет экономики и финансов 
в СПбГУ. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить. С 2015 года работала в компании «СКБ Контур». После того, как прошла курс по веб-разработке, начала заниматься фриланс-заказами и ушла с постоянной работы.
          </p>
          <a
            className='link about-me__link'
            href='https://github.com/SeikoAnna'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img className='about-me__image' src={photo} alt='Фото цветы' />
      </div>
    </section>
  );
};
