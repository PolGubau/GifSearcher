
import React from 'react'


import Gif from 'components/Gif/Gif'
import useGlobalGifs from 'hooks/useGlobalGifs'




export default function GifDetails({ urlID }) {

    const gifs = useGlobalGifs()
    const gif = gifs.find(singleGif =>
        singleGif.id === urlID.id
    )
    if (gif.title === '') gif.title = 'This GIF have no title 😿'

    return (
        <>
            <div className='GifDetail-Box'>
                <div className='GifDetail-Col'>
                    <p>{gif.title}</p>

                    <Gif
                        {...gif}

                    />
                </div>

                <div className='GifDetail-Col'>
                    <p>Type: {gif.type}</p>
                    <p> Source:<a href={`${gif.url}`}> {gif.source_tld}</a></p>
            </div>
        </div>
        </>
    )

}