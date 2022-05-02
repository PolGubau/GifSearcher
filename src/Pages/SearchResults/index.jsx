import React from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import './styles.css'
import { Link } from 'wouter'
import InputSearch from 'components/InputSearch/InputSearch'
import TrendingSearches from 'components/TrendingSearches/TrendingSearches'


export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword })
    const subtitle = 'Searching gifs about "' + keyword + '"';

    const handleNextPage = () => {
        // Cuando pasamos una función a un setState, coge el valor anterior
        setPage(prevPage => prevPage + 1)
    }

    return <>
        <InputSearch />
        <div className='App-Main'>

            <div className='App-Results'>
                <div>

                    <div className='subtitle-line'>
                        <Link to='../' className='returnButton-subtitle'>Back</Link>
                        <h5 className='subtitle'>{decodeURI(subtitle)}</h5>
                    </div>
                    {loading
                        ? <Spinner />
                        : <ListOfGifs gifs={gifs} />
                    }
                </div>
                <div className='last-Options'>
                    <button className='nextPageButton' onClick={handleNextPage}>More Gifs 🥳</button>
                </div>
            </div>

            <div className='App-category'>
                <TrendingSearches />
            </div>

        </div>



    </>

}


