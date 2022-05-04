import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import './styles.css'
import { Link } from 'wouter'
import InputSearch from 'components/InputSearch/InputSearch'
import TrendingSearches from 'components/TrendingSearches/TrendingSearches'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'



export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword })
    const subtitle = 'Searching gifs about "' + keyword + '"';

    const externalRef = useRef()

    const { isNearScreen } = useNearScreen({distance:'400px', externalRef: loading ? null : externalRef, once: false })


// UseCallBack guarda el valor de la función que tiene dentro así no tiene que volver a crearla
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ),[])

    useEffect(() => {
        console.log(isNearScreen)
        if (isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage, isNearScreen])



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
                        : <> <ListOfGifs gifs={gifs} />
                            <div id='visor' ref={externalRef}></div></>

                    }
                </div>


                {/* <div className='last-Options'><button className='nextPageButton' onClick={handleNextPage}>More Gifs 🥳</button></div> */}
            </div>

            <div className='App-category'>
                <TrendingSearches />
            </div>

        </div>



    </>

}


