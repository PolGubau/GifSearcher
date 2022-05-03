import React from 'react';
import GifDetails from 'components/GifDetails';


export default function Detail({ params }) {



    return (
        <>
            <a href="../">Volver</a>

            <GifDetails urlID={params} />
        </>

    )
}



