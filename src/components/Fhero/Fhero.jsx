import React from 'react'
import './Fhero.scss'

const Fhero = (props) => {

    const dltH = () => {
            let message = window.confirm("Are you sure?")
        alert(message ? 'It has been deleted!' : 'It has been not deleted!')
        if(message) {
            props.deleteProps(props.hero.id);
        }


    }
    
    return (
        <div className='Fhero'>
            <img src={`${props.hero.thumbnail.path}/portrait_fantastic.${props.hero.thumbnail.extension}`} />
            <h4>{ props.hero.name}</h4>
            <button onClick={dltH}><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>
        </div>
    )
}

export default Fhero
