import React from 'react';
import Card from '../../assets/components/Card/Card';
import CardForm from '../../assets/components/CardForm/CardForm';
import { useState } from 'react';

function AddCard() {

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [vendor, setVendor] = useState('');

  const vendorIcon = `./icons/vendor-${vendor}.svg`;

  return (
    <div className='Wrapper'>
      <h1 className='Title'>Add a new bank card</h1>
      <p className='Info'>New card</p>
      <Card vendor={vendor}
        cardNumber={cardNumber}
        cardHolderName={cardHolderName}
        expirationDate={expirationDate}
        vendorIcon={vendorIcon} />
      <CardForm
        vendor={vendor} setVendor={setVendor}
        cardNumber={cardNumber} setCardNumber={setCardNumber}
        cardHolderName={cardHolderName} setCardHolderName={setCardHolderName}
        expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
    </div>
  )
}

export default AddCard
