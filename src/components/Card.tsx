import type { Card } from '../App'

type CardProps = {
  card: Card
}

export default function Card({ card }: CardProps) {
  return (
    <section id='card' className='card-container'>
      <div className='card card-back'>
        <img
          className='card-img'
          src='/images/bg-card-back.png'
          alt='card back side'
        />
        <div className='card-back-content'>
          <p>{card.cvc}</p>
        </div>
      </div>
      <div className='card card-front'>
        <img
          className='card-img'
          src='/images/bg-card-front.png'
          alt='card front side'
        />
        <div className='card-front-content'>
          <img src='/images/card-logo.svg' alt='card logo' />
          <p className='card-number'>{card.number}</p>
          <div className='card-footer'>
            <p className='owner-name'>{card.name}</p>
            <p className='valid-date'>
              {card.validDate.month}/{card.validDate.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
