import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';
import './Home.css';



const POPULAR_GIFS = ["Dog", "Cat", "Food", "Woman"]


export default function Home() {
    const [keyword, setKeyword] = useState('')
    // Da el path y el f, una function para navegar por la web
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs({ keyword })


    const handleSubmit = e => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = e => {
        setKeyword(e.target.value)
    }


    const subtitle = localStorage.getItem('lastKeyword') || 'Aqui aparecerá tu útlima búsqueda, de momento te enseñamos estos :)';



    return (
        <>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="keyword" id="keyword-input" className='keyword-input' value={keyword} placeholder='De qué quieres ver gifs?' />
                <input type="submit" value="Search Gif!" />
            </form>
            <h3 className="App-title">{subtitle}</h3>

            <ListOfGifs gifs={gifs} />

            <h3> Trending Gifs </h3>

            <ul>{POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                </li>
            ))}
            </ul >
        </>
    )
}