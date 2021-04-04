import React from 'react'
import './FilteredHeros.scss'
import Fhero from '../Fhero'

function FilteredHeros(props) {
    
    if(!props) {
        return null
    }

    return (
        <div className='FilteredHeros'>
            <button className='clearList'
        onClick={() => props.clearList()}>Clear List</button>
        {    
            props.heroes.filter((e, i, arr) =>
            i === arr.findIndex((el) => (
                el.heros.id === e.heros.id
            ))
        )
            .map( (h, i) => {
            return   i < 5 ? (<Fhero key={h.heros.id} 
                hero={h.heros}
                deleteProps={props.deleteProps}
                />) :
                null
                    }
                )
        }
        
        </div>
    )
}

export default FilteredHeros
