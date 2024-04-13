import React, { useEffect } from 'react';
import './CardForm.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddNewCard } from '../../../reducers/AddNewCard';


function CardForm({ cardNumber, setCardNumber, cardHolderName, setCardHolderName, expirationDate, setExpirationDate, vendor, setVendor }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ccv, setCCV] = useState('');


    const handleVendorChange = (event) => {
        setVendor(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(AddNewCard({ cardNumber, cardHolderName, expirationDate, ccv, vendor }));
        navigate('/')
    };

    return (
        <form className='Card_form'>
            <article>
                <p>Card number</p>
                <input type='text' value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
            </article>
            <article>
                <p>Cardholder name</p>
                <input type='text' value={cardHolderName} onChange={(event) => setCardHolderName(event.target.value)} /></article>
            <div className='Small_inputs'>
                <article className='Expiration_input'>
                    <p>Valid thru</p>
                    <input type='text' value={expirationDate} onChange={(event) => setExpirationDate(event.target.value)} /></article>
                <article className='CCV_input'>
                    <p>CCV</p>
                    <input type='text' value={ccv} onChange={(event) => setCCV(event.target.value)} /></article>
            </div>
            <article className='Vendor_input'>
                <p>Vendor</p>
                <select id='vendors' value={vendor} onChange={handleVendorChange}>
                    <option value="default">Select Vendor</option>
                    <option value='bitcoin'>Bitcoin Inc</option>
                    <option value='ninja'>Ninja Bank</option>
                    <option value='blockchain'>Block Chain Inc</option>
                    <option value='evil'>Evil Corp</option>
                </select>
            </article>
            <button className='Button' onClick={handleSubmit}>Add card</button>
        </form>
    )
}

export default CardForm
