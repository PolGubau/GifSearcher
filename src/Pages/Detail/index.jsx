import React, { useContext } from 'react';
import Gif from '../../components/Gif/Gif';
// Queremos usar el contexto
import GifsContext from '../../context/GifsContext';


export default function Detail({ params }) {
 
    const {gifs} = useContext(GifsContext)
    
    const gif=gifs.find(singleGif =>
        singleGif.id === params.id
        )
    console.log(gif)
    
    return (
    <>
    <a href="../">Volver</a>
    
    
    <Gif 
        {...gif}
        
    />
    </>
    
    )
}



