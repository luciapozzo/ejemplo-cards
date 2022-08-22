import React from 'react'
import Button from './Button/Button'

const CardDescription = (props) => {
  return (
    <div className='card-description'>
        <div>
            <p className='title'>{props.cardTitle}</p>
            <p className='price'>{props.cardPrice}</p>
        </div>      
        <Button />
    </div>
  )
}

export default CardDescription