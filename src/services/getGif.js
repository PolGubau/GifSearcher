import React from 'react'


const apiKEY = 'Inp15btfd3DTHhG4yS37fX6zCME5vlCP';



export default function getGifs({ keyword = 'cat' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;



    return fetch(apiURL)

        .then(res => res.json())
        .then(response => {
            const { data = [] } = response
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = image.images.downsized_medium
                return { title, id, url }
            });
            return gifs
        })
}