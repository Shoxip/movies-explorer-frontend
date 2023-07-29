import './Hero.css'
import earthImg from '../../../images/earth.svg';



export default function Hero() {

  return (
    <section className={'hero'}>
      <div className={'hero__content'}>
        <div className={'hero__container'}>
            <div className="hero__container-top">
              <h1 className={'hero__title'}>
                Учебный проект студента факультета
                <br />
                Веб-разработки.
              </h1>

              <p className={'hero__description'}>
                Листайте ниже, чтобы узнать больше про этот проект и его создателя.
              </p>
            </div>


          <div className="hero__container-bottom">
            <button className={'hero__button animation-transition hovered-button'}>
              Узнать больше
            </button>
          </div>
        </div>

        <img className={'hero__image'} src={earthImg} alt={'earth'} />
      </div>
    </section>
  )
}
