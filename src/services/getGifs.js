import { API_KEY, API_URL } from './settings'




const fromResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id, type, source_tld } = image
            const { url } = image.images.downsized_medium
            return { title, id, url, images, type, source_tld }
        });
        return gifs
    }
    return []
}


export default function getGifs({ keyword = 'cat', limit = '25' ,page=0} = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;



    return fetch(apiURL)

        .then(res => res.json())
        .then(fromResponseToGifs)

}