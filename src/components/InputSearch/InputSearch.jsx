import React, { useState } from 'react'
import { useLocation } from 'wouter'



export default function InputSearch(props) {
    const [keyword, setKeyword] = useState('')
    // Da el path y el f, una function para navegar por la web
    const [path, pushLocation] = useLocation()
   


    const handleSubmit = e => {
        e.preventDefault()

        pushLocation(`/search/${keyword}`)
    }
    const handleChange = e => {
        setKeyword(e.target.value)
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="keyword" id="keyword-input" className='keyword-input' value={keyword} placeholder='De qué quieres ver gifs?' />
            <input type="submit" value="Buscar! " className='submit-input' />
        </form>
    )
};
