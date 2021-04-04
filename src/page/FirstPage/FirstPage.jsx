import React, {useState} from 'react'
import './FirstPage.scss'
import Cards from '../../components/Cards'
import FilteredHeros from '../../components/FilteredHeros'

const FirstPage = (props) => {


    const [heroes, setHeroes] = useState(JSON.parse(localStorage.getItem('hero')) || []);

    const deleteProps = (id) => {
        
        const hero = heroes.filter( h => id !== h.heros.id)
        setHeroes(hero)
        }

    const clearList = () => {
        localStorage.removeItem('hero')
        setHeroes([])
    }

    return (
        <div className='FirstPage'>
            <Cards getInfo={data => {
                setHeroes([...heroes, data])
                localStorage.setItem('hero', JSON.stringify([...heroes,data]))
                }}
                heros={props.heros}
                setHeroId={props.setHeroId}
                />
            <FilteredHeros clearList={clearList} heroes={heroes} deleteProps={deleteProps} />
            <a href="body"><button className="myBtn"><i className="fa fa-angle-double-up" aria-hidden="true"></i></button></a>
        </div>
    )
}

export default FirstPage
