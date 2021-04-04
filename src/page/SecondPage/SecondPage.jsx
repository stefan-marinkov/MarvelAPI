import React, {useState} from 'react'
import './SecondPage.scss'
import logo from '../../logo-marvel.png'
import Comics from '../../components/Comics'
import AboutComics from '../../components/AboutComics'

function SecondPage(props) {
    const [com, setCom] = useState(false)
    const [aboutComic, setAboutComic] = useState([])
    const [comicId, setComicId] = useState(false)

    const changeView = () => {
        setCom(!com)
    }

    const getAbout = (aboutComic) => {
        //console.log(aboutComic)
        setAboutComic(aboutComic)
        setComicId(aboutComic.id)
    }

console.log(props)
    return (
        <div className='SecondPage'>
            <header>
                <img src={logo} alt='LOGO' /><div className='back'
                onClick={() => {
                    props.setHeroId(null)
                }} >Homepage</div>
            </header>
                <div className='infoHero'>
                    <img src={`${props.heros.thumbnail.path}/portrait_fantastic.${props.heros.thumbnail.extension}`}/>
                    <div className='about'>
                        <h2>{props.heros.name}</h2>
                        <p>{props.heros.description || 
                        `Lorem ipsum dolor, sit am.  ipsum molestiae dolorum ut, recusandae ipsa officia earum quidem nostrum facere fugit porro 
                        deleniti consequuntveritatis
                        sit? `}</p>
                    </div>
                </div>
                <button onClick={changeView}>{!com ? 'Hide Comics' : 'Show Comics' }</button>

            {
            !comicId ?  (
            <div className={!com ? `allComics` : `displayNone` }>
            {
                props.comics.map( h => {
                return   <Comics key={h.id}  {...h} getAbout={getAbout}/>
            })
            }
            </div>) : (
                <AboutComics key={props.heros.id} aboutComic={aboutComic} setComicId={setComicId}/>
                )
            }
        </div>
    )
}

export default SecondPage
