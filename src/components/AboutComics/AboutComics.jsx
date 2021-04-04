import React from 'react'
import './AboutComics.scss'
import logo from '../../logo-marvel.png'

const AboutComics = (props) => {
    console.log(props)
    return (
        <div className='AboutComics'>
            <div className='imgBck'>
            <img
            src={!props.aboutComic.thumbnail.path ? logo : props.aboutComic.thumbnail.path + '/portrait_uncanny.' + props.aboutComic.thumbnail.extension}
            />
            <button onClick={()=> props.setComicId(null)}>Back</button>
            </div>
            <div className='comAb'>
            <h3>Titile:</h3>
            <p>{props.aboutComic.title}</p>
            <h4>Series:</h4>
            <p>{props.aboutComic.series.name}</p>
            <h4>Description:</h4>
            <p>{props.aboutComic.description}</p>
            <h4>Number:</h4>
            <p>{props.aboutComic.issueNumber}</p>
            <h4>Modified:</h4>
            <p>{props.aboutComic.modified}</p>
            </div>
        </div>
    )
}

export default AboutComics
