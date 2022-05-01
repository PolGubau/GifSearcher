import React from 'react'
import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'



export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword })
    const subtitle = 'Searching gifs about "' + keyword + '"';

    return <>
        {subtitle}
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />
        }
    </>

}