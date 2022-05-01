import React from 'react'
import InputSearch from '../../components/InputSearch/InputSearch';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import TrendingSearches from '../../components/TrendingSearches';
import './Home.css';
import { useGifs } from '../../hooks/useGifs';
import useGlobalGifs from '../../hooks/useGlobalGifs';





export default function Home() {


    const gifs = useGlobalGifs()
    const subtitle = localStorage.getItem('lastKeyword')
        ? 'Última Búsqueda ⏰'
        : 'Busca algún GIF 💁‍♀️';


    const search = localStorage.getItem('lastKeyword')


    useGifs(search)


    return (
        <>
            <InputSearch />

            <div className='App-Main'>

                <div className='App-Results'>


                    <h3 className="App-title">{subtitle}</h3>


                    <ListOfGifs gifs={gifs} />
                </div>

                <div className='App-category'>
                    <TrendingSearches />
                </div>

            </div>

        </>
    )
}