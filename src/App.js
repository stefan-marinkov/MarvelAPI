import React, { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/Header';
import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";

const App = () => {

  //apiKey
const apiPubKey = '&apikey=123bf5eeb1e1e9e12b179e01930de712';
const apiPrivKey = '4a4dc63d5016ef4443bf827ee575f3189702079a';
const apiTs = '&ts=1';
const apiHash = '&hash=88270579742c6b9aa42d8353cfb7bafd'
const allKeys = apiTs + apiPubKey + apiHash;

const limit = '&limit=30'

const [ heros, setHeros ] = useState([])
const [input, setInput] = useState('')
const [heroId, setHeroId] = useState(null)
const [comics, setComics] = useState([])

useEffect(() => {

  if (!input && !heroId) {
      (
      fetch('https://gateway.marvel.com:443/v1/public/characters?orderBy=name' + limit + allKeys)
        .then(res => res.json())
        .then(data => {
          setHeros(data.data.results)
        })
        )

    } else if (!input && heroId) {
      (
        fetch(`https://gateway.marvel.com:443/v1/public/characters/${heroId}/comics?${allKeys}`)
        .then(res => res.json())
        .then( data => {
          setComics(data.data.results)
        })
        )
    } else { 
      (
    fetch('https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=20&nameStartsWith=' + input + allKeys)
    .then(res => res.json())
    .then(data => {
      //console.log(data)
        setHeros(data.data.results)
    })
    )
}
}, [input, heroId])

const getSearch = (input, reset) => { 
  setInput(input)
  reset('')
}
const getAll = () => {
  setInput('')
}


  return (
    (<div className="App">
      {heroId ? (
      <SecondPage 
      heros={heros.find( e => e.id === heroId )}
      setHeroId={setHeroId}
      comics={comics}
      />
      ) : (
        <>
      <Header getSearch={getSearch} getAll={getAll}/>
      <FirstPage heros={heros} setHeroId={setHeroId} />
      </>
      )
      }
      <div className='attribution'>"Data provided by Marvel. © 2014 Marvel"</div>
    </div>
  )
  )
      }

export default App;
