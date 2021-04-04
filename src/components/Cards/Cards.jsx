import React from 'react'
import './Cards.scss'
import Card from '../Card'

const Cards = (props) => {
    return (
        <div className='Cards'>
            {props.heros.map(h => {
            return   <Card 
                        key={h.id} 
                        heros={h} 
                        getInfo={props.getInfo}
                        setHeroId={props.setHeroId}
                        />
            })}
        </div>
    )
}

export default Cards
