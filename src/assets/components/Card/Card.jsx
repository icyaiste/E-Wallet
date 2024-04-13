import React from 'react';
import './Card.scss';
import chipLight from '../CardForm/icons/chip-light.svg';

function Card({cardNumber, cardHolderName, expirationDate, vendor, vendorIcon, onClick}) {
  

  return (
    <main className={`Card_box ${vendor}`} onClick={onClick}>
      <header className='Header'>
        <img className='Header__chip_light' src={chipLight} />
        <div className={{vendor}} src={vendorIcon}/>
      </header>
      <h2 className='Card_number'>{cardNumber}</h2>
      <footer className='Footer'>
        <div className='Owner'>
          <p className='Owner__info'>cardholder name</p>
          <p className='Owner__name'>{cardHolderName}</p>
        </div>
        <div className='Expiration'>
          <p className='Expiration__info'>valid thru</p>
          <p className='xpiration__date'>{expirationDate}</p>
        </div>
      </footer>
    </main>
  )
}
export default Card