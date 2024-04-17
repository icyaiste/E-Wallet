import React, { useState } from 'react'
import Card from '../../assets/components/Card/Card';
import ActiveCard from '../../assets/components/Active_card/ActiveCard';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {

  const [activeCard, setActiveCard] = useState({});

  const makeCardActive = (card) => {
    setActiveCard(card);
  }

  const card = useSelector(state => state.AddNewCard); //Accessing the AddNewCard state from store
  // console.log(card);

  const navigate = useNavigate();
  const goToAddCard = () => {
    navigate("/add");
  }

  return (
    <section className='Wrapper'>
      <h1 className='Title'> E-wallet</h1>
      <p className='Info'>active card</p>
      {activeCard && <ActiveCard {...activeCard} />}
      <section className='Card_stack'>
        {card.map((card, index) => {
          return (
            <Card
              key={index}
              cardNumber={card.cardNumber}
              cardHolderName={card.cardHolderName}
              expirationDate={card.expirationDate}
              ccv={card.ccv}
              vendor={card.vendor}
              onClick={() => makeCardActive(card)}
            />
          )
        })}
      </section>
      <button className='Button' onClick={goToAddCard}>Add a new card</button>
    </section>
  )
}

export default Home
