import { API_KEY, API_URL } from './settings'


const fromAPIResponseToGifs = apiResponse => {
    const { data } = apiResponse
    const { images, title, id, type, source_tld } = data
    const { url } = images.downsized_medium
    return { title, id, url, images, type, source_tld }
}
export default getSingleGif({ id }){
    return fetch(`${API_URL}/gifs(${id}?api_key=${API_KEY})`)
        .then(res => res.json())
        .then(fromAPIResponseToGifs)
}