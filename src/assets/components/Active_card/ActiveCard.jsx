import React from 'react';
import chipLight from '../CardForm/icons/chip-light.svg';
import './ActiveCard.scss';



function ActiveCard({cardNumber, cardHolderName, expirationDate, vendor, vendorIcon, onClick}) {
  return (
    <main className={`Mainwrap ${vendor}`} onClick={onClick}>
    <header className='header'>
      <img className='header__chip_light' src={chipLight} />
      <div className={`header__vendor_icon ${vendor}`} src={vendorIcon}/>
    </header>
    <h2 className='card_number'>{cardNumber}</h2>
    <footer className='footer'>
      <div className='owner'>
        <p className='owner__info'>cardholder name</p>
        <p className='owner__name'>{cardHolderName}</p>
      </div>
      <div className='expiration'>
        <p className='expiration__info'>valid thru</p>
        <p className='expiration__date'>{expirationDate}</p>
      </div>
    </footer>
  </main>
  )
}

export default ActiveCard
