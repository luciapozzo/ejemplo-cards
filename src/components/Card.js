import React from 'react'
import CardDescription from './CardDescription'
import CardImage from './CardImage'


const Card = (props) => {
  return (
    <div className='card'>
        <CardImage
            imgFront={props.imgFront}
            imgBack={props.imgBack}
            cardTitle={props.cardTitle}            
        />
             
        <CardDescription
            cardTitle={props.cardTitle}
            cardPrice={props.cardPrice}
        />
    </div>
  )
}

export default Card