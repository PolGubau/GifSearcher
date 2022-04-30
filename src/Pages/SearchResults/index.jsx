
import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'

export default function SearchResults({keyword}){
    <>
    <h3>Searching results for</h3>
    <ListOfGifs keyword={keyword}/>
    </>
}