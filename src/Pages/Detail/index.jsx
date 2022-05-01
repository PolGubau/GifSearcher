import React,{useContext} from 'react';
// Queremos usar el contexto
import staticContext from '../../context/staticContext';


export default function Detail({ params }) {
    const context= useContext(staticContext)
    
    console.log(params.id)
    return (<h1>GIF con id {params.id} </h1>)
}



