import React, { useState } from 'react'
import { useLocation } from 'wouter'



export default function InputSearch() {
    const [keyword, setKeyword] = useState('')
    // Da el path y el f, una function para navegar por la web
    const [path, pushLocation] = useLocation()

    console.log(path)

    const handleSubmit = e => {
        e.preventDefault()
        if (keyword !== '') {
            pushLocation(`/search/${keyword}`)
        } else {
            alert('Try to write a word 💁🏼‍♀️')
        }
    }
    const handleChange = e => {
        setKeyword(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="keyword" id="keyword-input" className='keyword-input' value={keyword} placeholder='Which is your mood?' />
            <input type="submit" value="Seach! " className='submit-input' />
        </form>
    )
};
