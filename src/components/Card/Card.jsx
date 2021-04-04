import React from 'react'
import './Card.scss'

const Card = (props) => {
    
    return (
        <div className='Card'>
            <h4>{props.heros.name}</h4>
            <img src={`${props.heros.thumbnail.path}/portrait_fantastic.${props.heros.thumbnail.extension}`} alt='Image' />
            <div className='btns'>
                <button onClick={() => props.setHeroId(props.heros.id)}>Info</button>
                <button onClick={() => props.getInfo(props)}>Add</button>
            </div>
        </div>
    )
}

export default Card
