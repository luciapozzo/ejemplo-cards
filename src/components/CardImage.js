import React from 'react'

const CardImage = (props) => {
  return (
    <div className='card-image'>

        <div className='card-front'>
            <img src={props.imgFront} alt={props.cardTitle}></img>
        </div>

        <div id='mouse-over' className='card-back'>
            <div className='img-back'>
                <img src={props.imgBack} alt={props.cardTitle}></img>
            </div>
            <div className='text-back'>
                <p>Vista rápida</p>
            </div>
        </div>
        
    </div>
  )
}

export default CardImage