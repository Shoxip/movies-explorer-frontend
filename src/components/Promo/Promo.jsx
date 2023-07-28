import './Promo.css'
import earthImg from '../../images/earth.svg';

export default function Promo() {

return (
  <section className={'promo'}>
    <div className={'promo__content'}>
      <div className={'promo__container'}>
        <h1 className={'promo__title'}>Учебный проект студента факультета <br></br> Веб-разработки.</h1>
        <p className={'promo__description'}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className={'promo__button animation-transition hovered-button'}>Узнать больше</button>
      </div>
      <img className={'promo__image'} src={earthImg} alt={'earth'} />
    </div>
  </section>
)
}
