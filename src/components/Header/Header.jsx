import React, {useState} from 'react'
import './Header.scss'


const Header = (props) => {
    

const [input, setInput] = useState('')

    return (
        <div className='Header'>
                <div className='top'><h2>Hero Team</h2></div>
                <div className='search'>
                    <input 
                    type='text'
                    placeholder='Add Your Hero...'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    />
                    <button onClick={() => props.getSearch(input, setInput)}>Go</button>
                    <button onClick={() => props.getAll()}>All Heroes</button>
                    <h2>My Team</h2>
                    </div>
                    
        </div>
    )
}

export default Header
