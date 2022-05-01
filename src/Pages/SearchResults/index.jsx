import React from 'react'
import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'


const subtitle = 'Searching gifs about "' + localStorage.getItem('lastKeyword') + '"';

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword })

    return <>
        {subtitle}
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs} />
        }
    </>

}