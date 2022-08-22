import React from 'react'
import './components/Card.css'
import Card from './components/Card'

function App() {
  return (
    <div className='card-container'>
    <Card 
        imgFront={require('./images/card1-front.jpg')}
        imgBack={require('./images/card1-back.jpg')}
        cardTitle='LEAH'
        cardPrice='89,00€'
    />
        
    <Card 
        imgFront={require('./images/card2-front.jpg')}
        imgBack={require('./images/card2-back.jpg')}
        cardTitle='TRICKLE'
        cardPrice='69,00€'
    />

    <Card 
        imgFront={require('./images/card3-front.jpg')}
        imgBack={require('./images/card3-back.jpg')}
        cardTitle='NÄTAY'
        cardPrice='79,00€'
    />
    </div>
  );
}

export default App;
