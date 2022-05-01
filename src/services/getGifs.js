import { API_KEY, API_URL } from './settings'




const fromResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = image.images.downsized_medium
            return { title, id, url, images }
        });
        return gifs
    }
    return []
}


export default function getGifs({ keyword = 'cat', limit = '20' } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;



    return fetch(apiURL)

        .then(res => res.json())
        .then(fromResponseToGifs)

}