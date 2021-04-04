import React from 'react'
import './Comics.scss'

const Comics = (props) => {
    return (
        <div className='Comics'>
            {props === null ? (
<>
            { console.log('empty')}
                <div className='divSorry'>
                    <h1>Sorry</h1>
                </div>
</>
            ) :
            (
            <>
            <section className="front">
            <h3>{props.title}</h3>
            <img
            src={`${props.thumbnail.path}/portrait_fantastic.${props.thumbnail.extension}`} />
            <p className='num'>Comic {props.issueNumber}</p>
            </section>
            <section className="back">
                <h5>{props.title}</h5>
                {props.prices.map( p =>  (
                    <p>{p.type} : {p.price}</p>
                ))}
                <button onClick={() => props.getAbout(props)}>Click for more info</button>
            </section>
            </>
            )
            }
        </div>
    )
}

export default Comics
